import React, { Component } from 'react'
import { List, Avatar, Space } from 'antd';
import { Form, Radio, Layout } from 'antd';
import { FireOutlined, FieldTimeOutlined, CommentOutlined, BellOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import { Tag } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import CONSTURL from '../../components/community/config';
import Axios from 'axios';

/*
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
*/

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


export default class SearchContentComm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        kw: window.location.hash.slice(25),
        order: 1,
        data:[]
      };
    }

    componentDidMount(){
      var url=CONSTURL.local+CONSTURL.searchComm+this.state.kw+'&OrderBy='+this.state.order
      Axios.get(url).then((res)=>{
        var result=res.data
        /*
        for(var i=0;i<result.length;i++){
          result[i].Time=this.deleteLetter(result[i].Time)
        }
        */
        this.setState({data:result})
        console.log(res)
      })
    }

    onChange = e => {
        //console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };

    orderChange(e){
      //console.log('radio checked', e.target.value);
      this.setState({
        order: e.target.value
      })
      //console.log('radio checked', this.state.order);
    }

    render() {
        //初始化render数组状态
        let objArr=this.state.data
        
        return (
            <Layout>
            <Form
                layout="inline"
                className="components-table-demo-control-bar"
                style={{ marginBottom: 16, marginLeft: 20 }}
            >
                <Form.Item label="">
                    <Radio.Group
                    onChange={this.orderChange.bind(this)} 
                    value={this.state.order}
                    >
                    <Radio value={1}><FieldTimeOutlined/>最新发布</Radio>
                    <Radio value={2}><LikeOutlined/>最多点赞</Radio>
                    <Radio value={3}><CommentOutlined/>最多评论</Radio>
                    <Radio value={4}><BellOutlined/>最多订阅</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
                        
            <List
                itemLayout="vertical"
                split={true}
                /*
                split="true"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                */
               style={{ marginLeft: '20px' }}
                dataSource={objArr}

                renderItem={item => (
                <List.Item
                    key={item.moment.momentId}
                    extra={
                      <div>
                          <Tag icon={<CalendarOutlined />} color="orange">发布时间：{item.moment.time}</Tag>
                      </div>
                    }
                    actions={[
                    <IconText icon={StarOutlined} text={item.starCount} key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text={item.likeCount} key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text={item.commentCount} key="list-vertical-message" />,
                    ]}
                >
                    <List.Item.Meta
                    title={
                      <a href={'#/Moment/'+item.moment.momentId}>
                        {item.moment.title}
                      </a>
                    }
                    description={item.moment.content}
                    />
                </List.Item>
                )}
            />              
            </Layout>
 
        );
    }
}