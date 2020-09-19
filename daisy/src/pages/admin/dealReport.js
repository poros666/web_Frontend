import React, { Component } from 'react'
import Highlighter from 'react-highlight-words'
import { Card, Table, Button, Tag, Space, Input, DatePicker } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import ReportDetail from '../../components/admin/reportDetail'
import axios from 'axios'


export default class ReportManagement extends Component {
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
      .get('/Report', {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((res) => {
        console.log('res:', res.data)
        var tempData = []
        for (var i = 0; i < res.data.length; i++) {
          var tempTemp = {
            id: res.data[i].reportId,
            type: res.data[i].reportType,
            time: res.data[i].time,
            reporter: res.data[i].account,
            target: res.data[i].targetNickname,
            tags: res.data[i].dealStatus,
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

  render() {
    const columns = [
      {
        title: '编号',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
        ...this.getColumnSearchProps('id'),
      },
      {
        title: '提交时间',
        dataIndex: 'time',
        key: 'time',
        sorter: (a, b) => {
          var sdate = new Date(Date.parse(a.time.replace(/-/g, '/')))
          var edate = new Date(Date.parse(b.time.replace(/-/g, '/')))
          return edate - sdate
        },
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '举报者',
        dataIndex: 'reporter',
        key: 'reporter',
        render: (text) => <a href=''>{text}</a>,
      },

      {
        title: '类别',
        key: 'type',
        dataIndex: 'type',
        filters: [
          {
            text: '色情',
            value: '色情',
          },
          {
            text: '涉政',
            value: '涉政',
          },
          {
            text: '影响他人',
            value: '影响他人',
          },
          {
            text: '涉及交易',
            value: '涉及交易',
          },
          {
            text: '恶意',
            value: '恶意',
          },
        ],
        onFilter: (value, record) => record.type.indexOf(value) === 0,
        render: (type) => {
          let color = 'volcano'
          return (
            <Tag color={color} key={type}>
              {type}
            </Tag>
          )
        },
      },
      {
        title: '状态',
        key: 'tags',
        dataIndex: 'tags',
        filters: [
          {
            text: '未处理',
            value: 'unprocessed',
          },
          {
            text: '已处理',
            value: 'successful',
          },
          {
            text: '失败',
            value: 'failed',
          },
        ],
        onFilter: (value, record) => record.tags.indexOf(value) === 0,
        render: (tags) => {
          console.log('render-tags')
          let color = 'geekblue'
          if (tags === 'successful') {
            color = 'green'
          }
          if (tags === 'failed') {
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
        render: (text, record) => (
          <Space size='middle'>
            <ReportDetail id={record.id} />
          </Space>
        ),
      },
    ]

    // var data = [

    // ]

    return (
      <Card title='处理举报' extra={<div></div>}>
        {/* {
            this.state.data.length == 0?"none":JSON.stringify( this.state.data[0].ReportId)   
          } */}
        {console.log('sss:', this.state.data)}
        <Table columns={columns} bordered dataSource={this.state.data} />
      </Card>
    )
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
