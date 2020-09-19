import React, { Component } from 'react'
import Highlighter from 'react-highlight-words'
import { Card, Table, Button, Tag, Space, Input, Popconfirm } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import CollectionsPage from '../../components/admin/compEditPop'
import CompDetail from '../../components/admin/compDetail'
import CompNotice from '../../components/admin/compNoticePop'
import axios from 'axios'
import moment from 'moment'

// s<e = true
function checkTime(stime, etime) {
  //通过replace方法将字符串转换成Date格式
  var sdate = new Date(Date.parse(stime.replace(/-/g, '/')))
  var edate = new Date(Date.parse(etime.replace(/-/g, '/')))
  //获取两个日期的年月日
  var smonth = sdate.getMonth() + 1
  var syear = sdate.getFullYear()
  var sday = sdate.getDate()

  var emonth = edate.getMonth() + 1
  var eyear = edate.getFullYear()
  var eday = edate.getDate()
  //从年，月，日，分别进行比较
  if (syear > eyear) {
    return false
  } else {
    if (smonth > emonth) {
      return false
    } else {
      if (sday > eday) {
        return false
      } else {
        return true
      }
    }
  }
}

function getTags(start, end, now) {
  if (checkTime(now, start)) {
    console.log(start, end, now)
    return '未开始'
  } else if (checkTime(end, now)) {
    return '已结束'
  }
  return '进行中'
}

export default class CompManagement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false, //载入
      searchText: '', //搜索文字
      searchedColumn: '', //搜出来的行
      data: [],
    }
    var token = JSON.parse(localStorage.getItem('token')).token
    axios
      .get('/Project', { headers: { Authorization: 'Bearer ' + token } })
      .then((res) => {
        console.log('res:', res.data)
        var tempData = []
        var now = moment().format('YYYY-MM-DD')
        for (var i = 1; i < res.data.length; i++) {
          console.log('i', res.data[i])
          var tempTemp = {
            id: res.data[i].projectId,
            name: res.data[i].name,
            number: res.data[i].participantsNumber,
            start: res.data[i].startTime,
            end: res.data[i].endTime,
            sponsor: res.data[i].host,
            intro: res.data[i].introduction,
            tags: getTags(res.data[i].startTime, res.data[i].endTime, now),
          }
          console.log('tt:', res.data.length, tempTemp)
          tempData.push(tempTemp)
        }

        this.setState({
          data: tempData,
        })
        console.log('data:', this.state.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  getDetail = (id) => {
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id == id) {
        return this.state.data[i].intro
      }
    }
    return '暂无简介'
  }

  deleteNode = (id) => {
    var ndata = this.state.data
    console.log('ndata', ndata)
    delete ndata[0]
    console.log('ndata', ndata)
    // for(var i = 0; i<this.state.data.length; i++){
    //   if(this.state.data[i].id == id){
    //     ndata.slice(i,1)
    //     this.setState({
    //       data: ndata,
    //     })

    //     break
    //   }
    // }
  }

  render() {
    const columns = [
      {
        title: '比赛id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
        ...this.getColumnSearchProps('id'),
      },
      {
        title: '比赛名字',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
        ...this.getColumnSearchProps('name'),
      },
      {
        title: '参赛人数',
        dataIndex: 'number',
        key: 'number',
        render: (text) => <a>{text}</a>,
        ...this.getColumnSearchProps('number'),
      },
      {
        title: '开始时间',
        dataIndex: 'start',
        key: 'start',
        sorter: (a, b) => {
          var sdate = new Date(Date.parse(a.start.replace(/-/g, '/')))
          var edate = new Date(Date.parse(b.start.replace(/-/g, '/')))
          return edate - sdate
        },
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '结束时间',
        dataIndex: 'end',
        key: 'end',
        sorter: (a, b) => {
          var sdate = new Date(Date.parse(a.end.replace(/-/g, '/')))
          var edate = new Date(Date.parse(b.end.replace(/-/g, '/')))
          return edate - sdate
        },
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '主办方',
        dataIndex: 'sponsor',
        key: 'sponsor',
        ...this.getColumnSearchProps('sponsor'),
      },
      {
        title: '状态',
        key: 'tags',
        dataIndex: 'tags',
        filters: [
          {
            text: '未开始',
            value: '未开始',
          },
          {
            text: '进行中',
            value: '进行中',
          },
          {
            text: '已结束',
            value: '已结束',
          },
        ],
        onFilter: (value, record) => record.tags.indexOf(value) === 0,
        render: (tags) => {
          let color = 'geekblue'
          if (tags === '进行中') {
            color = 'green'
          } else if (tags === '已结束') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tags}>
              {tags}
            </Tag>
          )
        },
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record, detail = this.getDetail(record.id)) => (
          <Space size='middle'>
            <CompDetail Record={record} detail={detail} />
            <CompNotice Record={record} />
            <Popconfirm
              title='确认删除此项？'
              onCancel={() => {
                console.log('cancel')
              }}
              onConfirm={() => {
                console.log('confirm')
                var token = JSON.parse(localStorage.getItem('token')).token
                axios.delete(`/Project/${record.id}`, {
                  headers: { Authorization: 'Bearer ' + token },
                })
                // this.deleteNode(record.id)
                //此处调用删除api
              }}>
              <Button danger>删除</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ]

    // const data = [
    //   {
    //     key: '1',
    //     id: '1',
    //     name: 'John Brown',
    //     start: '2020/3/14',
    //     end: '2020/4/14',
    //     sponsor: '同济大学',
    //     tags: ['未开始'],
    //   },
    //   {
    //     key: '2',
    //     id: '132',
    //     name: 'poros',
    //     start: '2020/4/14',
    //     end: '2020/5/14',
    //     sponsor: '同济大学',
    //     tags: ['未开始'],
    //   },
    //   {
    //     key: '3',
    //     id: '13245',
    //     name: 'John Brown',
    //     start: '2021/3/14',
    //     end: '2021/4/14',
    //     sponsor: '同济大学',
    //     tags: ['进行中'],
    //   },
    //   {
    //     key: '4',
    //     id: '1sad',
    //     name: 'rich brain',
    //     start: '2020/3/15',
    //     end: '2020/4/15',
    //     sponsor: 'hasjkdhasu',
    //     tags: ['未开始'],
    //   },
    //   {
    //     key: '5',
    //     id: '1sad2',
    //     name: 'John Brown',
    //     start: '2021/6/15',
    //     end: '2021/7/15',
    //     sponsor: 'google',
    //     tags: ['未开始'],
    //   },
    // ]

    return (
      <Card
        title='比赛管理'
        extra={
          <div>
            <CollectionsPage />
          </div>
        }>
        <Table columns={columns} bordered dataSource={this.state.data} />
      </Card>
    )
  }

  //刷新
  reload = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  //搜索
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select())
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    })
  }

  handleReset = (clearFilters) => {
    clearFilters()
    this.setState({ searchText: '' })
  }
}
