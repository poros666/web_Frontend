import React, { Component } from "react"
import { Card, Table, Button, Tag, Space, Checkbox } from "antd"

export default class CompManagement extends Component {
  render() {
    const columns = [
      {
        title: "选框",
        dataIndex: "check",
        key: "check",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "举报单编号",
        dataIndex: "rid",
        key: "rid",
      },
      {
        title: "举报时间",
        dataIndex: "time",
        key: "time",
      },
      {
        title: "举报者",
        dataIndex: "reporter",
        key: "reporter",
      },
      {
        title: "被举报者",
        dataIndex: "target",
        key: "target",
      },
      {
        title: "状态",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
          <>
            {tags.map((tag) => {
              let color = "volcano"
              if (tag === "") {
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
            {/* <a href="">编辑 {record.name}</a> */}
            <Button>查看该用户</Button>
          </Space>
        ),
      },
    ]

    const data = [
      {
        key: "1",
        name: "John Brown",
        start: "2020/2/32",
        end: "2020/2/32",
        sponsor: "同济大学",
        tags: ["未开始"],
      },
      {
        key: "2",
        name: "Jim Green",
        start: "2220/2/32",
        end: "2020/2/32",
        sponsor: "google",
        tags: ["进行中"],
      },
      {
        key: "3",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "4",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "5",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "6",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "7",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "8",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "9",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "10",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "11",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "12",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
      {
        key: "13",
        name: "Joe Black",
        start: "1920/2/32",
        end: "2020/2/32",
        sponsor: "Tencent",
        tags: ["已结束"],
      },
    ]

    return (
      <Card title="处理举报" extra={<Button type="primary">发布新比赛</Button>}>
        <Table columns={columns} bordered dataSource={data} />
      </Card>
    )
  }
}
