import React, { Component } from "react"
import Highlighter from "react-highlight-words"
import { Card, Table, Button, Tag, Space, Input, Popconfirm } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import CollectionsPage from "./compEditPop"

export default class CompManagement extends Component {
    render() {

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href='www.baidu.com'>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a href='www.baidu.com'>Invite {record.name}</a>
                  <a href='www.baidu.com'>Delete</a>
                </Space>
              ),
            },
        ]
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ]
          
        
        return (
            <Card 
                title="比赛管理"
                extra={
                    <Button type="primary" size="small">发布新比赛</Button>
                }
            >
                <Table columns={columns} bordered dataSource={data}/>
            </Card>
        )
    }
    const hasSelected = selectedRowKeys.length > 0

    const columns = [
      {
        title: "比赛名字",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "开始时间",
        dataIndex: "start",
        key: "start",
        sorter: (a, b) => a.start - b.start,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "结束时间",
        dataIndex: "end",
        key: "end",
        sorter: (a, b) => {
          let aTimeString = a.paper_date
          let bTimeString = b.paper_date
          let aTime = new Date(aTimeString).getTime()
          let bTime = new Date(bTimeString).getTime()
          return aTime - bTime
        },
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "主办方",
        dataIndex: "sponsor",
        key: "sponsor",
        ...this.getColumnSearchProps("sponsor"),
      },
      {
        title: "状态",
        key: "tags",
        dataIndex: "tags",
        filters: [
          {
            text: "未开始",
            value: "未开始",
          },
          {
            text: "进行中",
            value: "进行中",
          },
          {
            text: "已结束",
            value: "已结束",
          },
        ],
        onFilter: (value, record) => record.tags.indexOf(value) === 0,
        render: (tags) => (
          <>
            {tags.map((tag) => {
              let color = "geekblue"
              if (tag === "进行中") {
                color = "green"
              } else if (tag === "已结束") {
                color = "volcano"
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              )
            })}
          </>
        ),
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            {/* <a href="">编辑 {record.name}</a> */}
            <Button>编辑</Button>
            <Popconfirm
              title="确认删除此项？"
              onCancel={() => {
                console.log("cancel")
              }}
              onConfirm={() => {
                console.log("confirm")
                //此处调用删除api
              }}
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ]

    const data = [
      {
        key: "1",
        name: "John Brown",
        start: "2020/3/14",
        end: "2020/4/14",
        sponsor: "同济大学",
        tags: ["未开始"],
      },
      {
        key: "2",
        name: "poros",
        start: "2020/4/14",
        end: "2020/5/14",
        sponsor: "同济大学",
        tags: ["未开始"],
      },
      {
        key: "3",
        name: "John Brown",
        start: "2021/3/14",
        end: "2021/4/14",
        sponsor: "同济大学",
        tags: ["进行中"],
      },
      {
        key: "4",
        name: "rich brain",
        start: "2020/3/15",
        end: "2020/4/15",
        sponsor: "hasjkdhasu",
        tags: ["未开始"],
      },
      {
        key: "5",
        name: "John Brown",
        start: "2021/6/15",
        end: "2021/7/15",
        sponsor: "google",
        tags: ["未开始"],
      },
    ]

    return (
      <Card
        title="比赛管理"
        extra={
          <div>
            <CollectionsPage />
            <Button
              type="primary"
              onClick={this.reload}
              disabled={loading}
              loading={loading}
            >
              Reload
            </Button>
          </div>
        }
      >
        <Table
          columns={columns}
          bordered
          dataSource={data}
          rowSelection={rowSelection}
        />
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
    console.log("selectedRowKeys changed: ", selectedRowKeys)
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
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select())
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
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
    this.setState({ searchText: "" })
  }
}
