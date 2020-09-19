import React, { Component } from 'react'
import {List,Col, Pagination} from 'antd'
import 'antd/dist/antd.css';
import axios from 'axios'

export default class CompetitionList extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      data:[],
      total:0,
      currentData:[],
      pageSize: 5,
      pageNumber: parseInt(window.location.hash.slice(-1), 0) || 1 //获取当前页面的hash值，转换为number类型
     }
     axios.get('/Project')
     .then(response=>{
       console.log(response)
       this.setState({
         total:response.data.length
        });
   })
   .catch(error=>{
     console.log(error);
   })
  }

  componentDidMount() {
    //页面刷新时回到刷新前的page
    this.handleAnchor()
  }

  handleAnchor() {
    this.onPageChange(this.state.pageNumber, this.state.pageSize); //手动调用onPageChange,传入当前页数和每页条数
  }

  onPageChange=(page,pageSize)=>{
    console.log("page:",page);
    this.setState({
      pageNumber: page
    }, () => {
      window.location.hash = `#/allCompPage/pagenum=${page}`; //设置当前页面的hash值为当前page页数
    })
    axios.get('/Project')
    .then(response=>{
      console.log(response)
      this.setState((state)=>{
          for(let i=0;i<this.state.pageSize;i++){
            state.currentData.pop();
          }
          if((page-1)*this.state.pageSize+this.state.pageSize<=response.data.length){
            for(let i=(page-1)*this.state.pageSize;i<(page-1)*this.state.pageSize+this.state.pageSize;i++){
              state.currentData.push(response.data[i]);
            }
          }
          else{
            for(let i=(page-1)*this.state.pageSize;i<response.data.length;i++){
              state.currentData.push(response.data[i]);
            }
          }
          return{
            currentData:state.currentData,
          }
       });
 });
}
 
 getData()
 {
   axios.get('/Project')
   .then(response=>{
    console.log(response);
  })
  .catch(error=>{
    console.log(error);
    window.alert("连接出现问题，点击确定跳转回主页")
    window.location.hash ='#/home'
  });
 }


    render() {
        return (
            <div>
            <List
              itemLayout="vertical"
              size="large"
              dataSource={this.state.currentData}
              renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<a href={"#/compPage/id="+item.projectId+'/'}>{item.name}</a>
                    }
                    description={item.description}
                    />
                    {item.introduction}
                </List.Item>
              )}
            />
             <Col offset={9}>
                    <Pagination 
                      showQuickJumper 
                      current={this.state.pageNumber}
                      defaultPageSize={this.state.pageSize} 
                      total={this.state.total}
                      onChange={this.onPageChange} 
                    />
                    </Col>
            </div>
        )
    }
}
