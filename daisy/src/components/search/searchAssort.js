import React, { Component } from 'react'
import { Radio, Form, Layout } from 'antd';
import { FireOutlined, LikeOutlined, FieldTimeOutlined, CommentOutlined, BellOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import SearchContentComm from "../../components/search/searchContentComm"
import SearchContentComp from "../../components/search/searchContentComp"
import SearchContentUsr from "../../components/search/searchContentUsr"

const { TabPane } = Tabs;

export default class SearchAssort extends Component {
    state = {
        value: 1,
      };
    
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };

    render(){

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
                       onChange={this.onChange} value={this.state.value}
                    >
                      <Radio value={1}><FireOutlined/>综合排序</Radio>
                      <Radio value={2}><FieldTimeOutlined/>最新发布</Radio>
                      <Radio value={3}><CommentOutlined/>最多评论</Radio>
                      <Radio value={4}><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>

                <SearchContentComp/>
                <SearchContentComm/>
            </TabPane>
        
            <TabPane tab="比赛" key="2">
                <Form
                  layout="inline"
                  className="components-table-demo-control-bar"
                  style={{ marginBottom: 16, marginLeft: 20 }}
                >
                  <Form.Item label="">
                    <Radio.Group
                        onChange={this.onChange} value={this.state.value}
                    >
                      <Radio value={1}><FieldTimeOutlined/>最新发布</Radio>
                      <Radio value={2}><CommentOutlined/>最多评论</Radio>
                      <Radio value={3}><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>

                <SearchContentComp/>

            </TabPane>
          
            <TabPane tab="社区" key="3">
                <Form
                    layout="inline"
                    className="components-table-demo-control-bar"
                    style={{ marginBottom: 16, marginLeft: 20 }}
                >
                    <Form.Item label="">
                        <Radio.Group
                            nChange={this.onChange} value={this.state.value}
                        >
                        <Radio value={1}><FieldTimeOutlined/>最新发布</Radio>
                        <Radio value={2}><LikeOutlined/>最多点赞</Radio>
                        <Radio value={3}><CommentOutlined/>最多评论</Radio>
                        <Radio value={4}><BellOutlined/>最多订阅</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>

                <SearchContentComm/>

            </TabPane>
        
            <TabPane tab="用户" key="4">
                <Form
                  layout="inline"
                  className="components-table-demo-control-bar"
                  style={{ marginBottom: 16, marginLeft: 20 }}
                >
                    <Form.Item label="">
                    <Radio.Group
                        onChange={this.onChange} value={this.state.value}
                    >
                    <Radio value={1}><FieldTimeOutlined/>最新注册</Radio>
                    <Radio value={2}><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                    </Form.Item>
                </Form>
 
                <SearchContentUsr/>

            </TabPane>
          </Tabs>
        </Layout>
        );
    }
}