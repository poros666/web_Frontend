import React, { Component } from "react"
import Highlighter from "react-highlight-words"
import { Card, Table, Button, Tag, Space, Input, DatePicker } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import ReportDetail from "../../components/admin/reportDetail"

export default class CompManagement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [], //多选
      loading: false, //载入
      searchText: "", //搜索文字
      searchedColumn: "", //搜出来的行
    }
  }

  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0

    const columns = [
      {
        title: "编号",
        dataIndex: "id",
        key: "id",
        render: (text) => <a>{text}</a>,
        ...this.getColumnSearchProps("id"),
      },
      {
        title: "提交时间",
        dataIndex: "time",
        key: "time",
        sorter: (a, b) => a.time - b.time,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "举报者",
        dataIndex: "reporter",
        key: "reporter",
        render: (text) => <a href="">{text}</a>,
      },
      {
        title: "被举报者",
        dataIndex: "target",
        key: "target",
        render: (text) => <a href="">{text}</a>,
        //...this.getColumnSearchProps("target"),
      },
      {
        title: "类别",
        key: "type",
        dataIndex: "type",
        filters: [
          {
            text: "色情",
            value: "色情",
          },
          {
            text: "涉政",
            value: "涉政",
          },
          {
            text: "影响他人",
            value: "影响他人",
          },
          {
            text: "涉及交易",
            value: "涉及交易",
          },
          {
            text: "恶意",
            value: "恶意",
          },
        ],
        onFilter: (value, record) => record.type.indexOf(value) === 0,
        render: (type) => (
          <>
            {type.map((tag) => {
              let color = "volcano"
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
        title: "状态",
        key: "tags",
        dataIndex: "tags",
        filters: [
          {
            text: "未处理",
            value: "未处理",
          },
          {
            text: "已处理",
            value: "已处理",
          },
        ],
        onFilter: (value, record) => record.tags.indexOf(value) === 0,
        render: (tags) => (
          <>
            {tags.map((tag) => {
              let color = "geekblue"
              if (tag === "已处理") {
                color = "green"
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
            <ReportDetail />
          </Space>
        ),
      },
    ]

    const data = [
      {
        key: "1",
        id: "37g7y128",
        time: "2020/3/14",
        reporter: "2020/4/14",
        target: "同济大学",
        type:["色情", "涉政"],
        tags: ["未处理"],
      },
      {
        key: "2",
        id: "7s8f0f4h",
        time: "2020/3/14",
        reporter: "2020/4/14",
        target: "同济大学",
        type:["影响他人", "涉及交易"],
        tags: ["已处理"],
      },
    ]

    return (
      <Card
        title="处理举报"
        extra={
          <div>
            <Button type="primary" style={{ marginRight: 20 }}>
              完成处理
            </Button>
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
