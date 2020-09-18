import React, { Component } from 'react'
import {Card,Avatar,List} from 'antd'
import {isLogined} from "../../utils/auth"
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

export default class CompNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account:'',
      data:[]
    };
  }
  
  componentDidMount(){
    if(isLogined()){
      var tempAccount = JSON.parse(localStorage.userData).account;
      this.state.account = tempAccount;
      var url=CONSTURL.local+CONSTURL.getCompNotice+this.state.account
      Axios.get(url).then((res)=>{
        var result=res.data
        this.setState({data:result})
        //console.log(this.state.data)
        //console.log(res)
      })
    }
  }

  render() {
        //初始化render数组状态
        let objArr=this.state.data

        return (
            <div className='notice'>
                <Card id='notice_card' bordered={false}>
                <List 
                  itemLayout="horizontal" 
                  dataSource={objArr} 
                  renderItem={item => (
                    <List.Item>
                    <List.Item.Meta
                      //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={item.title}
                      description={"所属比赛名称："+item.name+"    "+"通知时间："+item.time}
                    />
                    <div>{item.content}</div>
                    </List.Item>
                )}
                />
                </Card>
            </div>
        )
    }
}