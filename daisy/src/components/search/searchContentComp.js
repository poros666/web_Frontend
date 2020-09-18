import React, { Component } from 'react'
import { List, Avatar, Form, Radio, Layout } from 'antd';
import { FireOutlined, LikeOutlined, FieldTimeOutlined, CommentOutlined, BellOutlined } from '@ant-design/icons';

import CONSTURL from '../../components/community/config';
import Axios from 'axios';

/*
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
*/

export default class SearchContentComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        kw: window.location.hash.slice(25),
        order: 1,
        data: []
      };
    }

    componentDidMount(){
      var url=CONSTURL.local+CONSTURL.searchComp+this.state.kw+'&OrderBy='+this.state.order
      Axios.get(url).then((res)=>{
        var result=res.data
        /*
        for(var i=0;i<result.length;i++){
          result[i].Time=this.deleteLetter(result[i].Time)
        }
        */
        this.setState({data:result})
        console.log(this.state.data)
        console.log(res)
      })
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };

    orderChange(e){
      console.log('radio checked', e.target.value);
      this.setState({
        order: e.target.value
      })
      console.log('radio checked', this.state.order);
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
                    <Radio value={2}><CommentOutlined/>最多评论</Radio>
                    <Radio value={3}><BellOutlined/>最多订阅</Radio>
                  </Radio.Group>
                </Form.Item>
              </Form>

              <List
                  itemLayout="horizontal"
                  dataSource={objArr}
                  style={{ marginLeft: '20px' }}
                  renderItem={item => (
                  <List.Item>
                      <List.Item.Meta
                      title={
                        <a href={"#/compPage/id="+item.projectId+'/'}>
                          {item.name}
                        </a>
                      }
                      description={
                        "发布时间："+item.startTime+"      "+"结束时间："+item.endTime
                      }
                      />
                      {item.introduction}
                  </List.Item>
                  )}
                />                
              </Layout>

        );
    }
}
//SearchContentComp.contextTypes = {router:()=> React.PropTypes.func.isRequired };