import React, { Component } from 'react'
import { Table, Switch, Radio, Form, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FireOutlined, LikeOutlined, FieldTimeOutlined, CommentOutlined, BellOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </span>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

const { TabPane } = Tabs;

export default class SearchAssort extends Component {
    state = {
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        expandable,
        title: undefined,
        showHeader,
        footer,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    };
   
    handleToggle = prop => enable => {
    this.setState({ [prop]: enable });
    };

    handleSizeChange = e => {
    this.setState({ size: e.target.value });
    };

    handleTableLayoutChange = e => {
    this.setState({ tableLayout: e.target.value });
    };

    handleExpandChange = enable => {
    this.setState({ expandable: enable ? expandable : undefined });
    };

    handleEllipsisChange = enable => {
    this.setState({ ellipsis: enable });
    };

    handleTitleChange = enable => {
    this.setState({ title: enable ? title : undefined });
    };

    handleHeaderChange = enable => {
    this.setState({ showHeader: enable ? showHeader : false });
    };

    handleFooterChange = enable => {
    this.setState({ footer: enable ? footer : undefined });
    };

    handleRowSelectionChange = enable => {
    this.setState({ rowSelection: enable ? {} : undefined });
    };

    handleYScrollChange = enable => {
    this.setState({ yScroll: enable });
    };

    handleXScrollChange = e => {
    this.setState({ xScroll: e.target.value });
    };

    handleDataChange = hasData => {
    this.setState({ hasData });
    };

    render(){

        const { xScroll, yScroll, ...state } = this.state;

        const scroll = {};
        if (yScroll) {
        scroll.y = 240;
        }
        if (xScroll) {
        scroll.x = '100vw';
        }

        const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
        if (xScroll === 'fixed') {
        tableColumns[0].fixed = true;
        tableColumns[tableColumns.length - 1].fixed = 'right';
        }
        
        return(
      
        <Layout className="searchAssortBox" style={{ width: '86%', margin: '5% 7%' }}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="综合" key="1">
                <Form
                  layout="inline"
                  className="components-table-demo-control-bar"
                  style={{ marginBottom: 16, marginLeft: 20}}
                >
                  <Form.Item label="">
                    <Radio.Group
                      value={this.state.top}
                      onChange={e => {
                        this.setState({ top: e.target.value });
                      }}
                    >
                      <Radio value="none"><FireOutlined/>综合排序</Radio>
                      <Radio value="topLeft"><FieldTimeOutlined/>最新发布</Radio>
                      <Radio value="topCenter"><CommentOutlined/>最多评论</Radio>
                      <Radio value="topRight"><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
                  
                <Table
                  {...this.state}
                  pagination={{ position: [this.state.top, this.state.bottom] }}
                  columns={tableColumns}
                  dataSource={state.hasData ? data : null}
                  scroll={scroll}
                />
            </TabPane>
        
            <TabPane tab="比赛" key="2">
                <Form
                  layout="inline"
                  className="components-table-demo-control-bar"
                  style={{ marginBottom: 16, marginLeft: 20 }}
                >
                  <Form.Item label="">
                    <Radio.Group
                      value={this.state.top}
                      onChange={e => {
                        this.setState({ top: e.target.value });
                      }}
                    >
                      <Radio value="none"><FieldTimeOutlined/>最新发布</Radio>
                      <Radio value="topCenter"><CommentOutlined/>最多评论</Radio>
                      <Radio value="topRight"><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
                  
                <Table
                  {...this.state}
                  pagination={{ position: [this.state.top, this.state.bottom] }}
                  columns={tableColumns}
                  dataSource={state.hasData ? data : null}
                  scroll={scroll}
                />
            </TabPane>
          
            <TabPane tab="社区" key="3">
                <Form
                    layout="inline"
                    className="components-table-demo-control-bar"
                    style={{ marginBottom: 16, marginLeft: 20 }}
                >
                    <Form.Item label="">
                        <Radio.Group
                        value={this.state.top}
                        onChange={e => {
                            this.setState({ top: e.target.value });
                        }}
                        >
                        <Radio value="topLeft"><FieldTimeOutlined/>最新发布</Radio>
                        <Radio value="topCenter"><LikeOutlined/>最多点赞</Radio>
                        <Radio value="topRight"><CommentOutlined/>最多评论</Radio>
                        <Radio value="none"><BellOutlined/>最多订阅</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
        
                <Table
                  {...this.state}
                  pagination={{ position: [this.state.top, this.state.bottom] }}
                  columns={tableColumns}
                  dataSource={state.hasData ? data : null}
                  scroll={scroll}
                />
            </TabPane>
        
            <TabPane tab="用户" key="4">
                <Form
                  layout="inline"
                  className="components-table-demo-control-bar"
                  style={{ marginBottom: 16, marginLeft: 20 }}
                >
                    <Form.Item label="">
                    <Radio.Group
                    value={this.state.top}
                    onChange={e => {
                        this.setState({ top: e.target.value });
                    }}
                    >
                    <Radio value="topLeft"><FieldTimeOutlined/>最新注册</Radio>
                    <Radio value="topCenter"><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                    </Form.Item>
                </Form>
        
                <Table
                  {...this.state}
                  pagination={{ position: [this.state.top, this.state.bottom] }}
                  columns={tableColumns}
                  dataSource={state.hasData ? data : null}
                  scroll={scroll}
                />  
            </TabPane>
          </Tabs>
        </Layout>
        );
    }
}