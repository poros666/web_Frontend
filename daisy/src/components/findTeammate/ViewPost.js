import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import{  Pagination  } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import axios from 'axios'

let ProjctId;

export default class CommunityContent extends Component {

  constructor(props){
    super(props)
    ProjctId=1;
    this.state={
      currentData:[],
      total:0,
      pageSize: 1,
      pageNumber: parseInt(window.location.hash.slice(1), 0) || 1 //获取当前页面的hash值，转换为number类型
     }
     this.onPageChange=this.onPageChange.bind(this);
    axios.get('http://mock-api.com/5g7AeqKe.mock/Match/Count?ProjctId='+ProjctId)
    .then(response=>{
      this.setState({
        total:response.data
      })
  })
  .catch(error=>{
    console.log(error);
  })
  }

  componentDidMount() {
    this.handleAnchor() //页面刷新时回到刷新前的page
  }
  handleAnchor() {
    this.onPageChange(this.state.pageNumber, this.state.pageSize); //手动调用onPageChange,传入当前页数和每页条数
  }

  onPageChange=(page)=>{
    this.setState({
      pageNumber: page
    }, () => {
      window.location.hash = `#/findteam/pagenum=${page}`; //设置当前页面的hash值为当前page页数
    })
    axios.get('http://mock-api.com/5g7AeqKe.mock/Post?ProjctId='+ProjctId+'&PageNumber='+page)
    .then(response=>{
      this.setState((state)=>{
          for(let i=0;i<10;i++){
            state.currentData.pop();
          }
          for(let i=0;i<response.data.length;i++){
            state.currentData.push(response.data[i]);
          }
          return{
            currentData:state.currentData,
          }
       });
  })
  .catch(error=>{
    console.log(error);
    this.setState((state)=>{
      for(let i=0;i<10;i++){
        state.currentData.pop();
      }
      return{
        currentData:state.currentData,
      }
   });
  })
 }
  
    render() {
        const agriculturalListData = this.state.currentData;
        return (
            <div style={{padding:'0 50px'}}>
                <br/>
                <br/>
                    <List
                        itemLayout="horizontal"
                        dataSource={agriculturalListData}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                 avatar={
                                  //头像的来源和指向的地址
                                  <a href={"#/personal"}>
                                    <Avatar src={require("../../img/avatar/"+item.Icon+".jpg")}></Avatar>
                                  </a>
                                }
                                title={<p>{item.NickName}的组队帖</p>}
                                description={<a href={"#/PostPage/"+ProjctId+"/"+item.PostId}>查看帖子详情</a>}
                            />
                        </List.Item>
                        )}
                    />
                    <Divider/>
                    <div id='TurnPage'>
                    <Pagination 
                      showQuickJumper 
                      defaultCurrent={this.state.pageNumber} 
                      defaultPageSize={this.state.pageSize} 
                      total={this.state.total}
                      onChange={this.onPageChange} 
                    />
                    </div>
                <br/>
                <br/>
            </div>
        )
    }
}