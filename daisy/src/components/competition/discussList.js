import React, { Component } from 'react'
import { List, Avatar ,Space,Radio, Pagination, Col, Popover} from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
import moment from 'moment'
import Report from './Report'
import { isLogined } from '../../utils/auth';



export default class DiscussList extends Component { 
  constructor(props)
  {
    super(props)
    this.state={
      compID:this.props.compID,
      sortMethod:'time',
      currentData:[],
      data:[],
      image:null,
      total: 0,
      pageSize: 5,
      pageNumber: parseInt(window.location.hash.slice(-1), 0) || 1 //获取当前页面的hash值，转换为number类型
     } 
  }

  componentDidMount() {
    this.getData() //页面刷新时回到刷新前的page
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
      window.location.hash = `#/compPage/id=${this.props.compID}/pagenum=${page}`; //设置当前页面的hash值为当前page页数
    })
    this.setState((state)=>{
    for(let i=0;i<state.pageSize;i++){
      state.currentData.pop();
    }
    for(let i=pageSize*(page-1);i<state.total&&i<pageSize*page;i++){
      state.currentData.push(this.state.data[i]);
    }
      return{
        currentData:state.currentData,
      }
    }
   );
 }

  getData(){
    axios.get('/Discussion?ProjectId='+this.state.compID)
    .then(response=>{
       console.log(response);
       this.setState(
           {
             data:response.data,
             total:response.data.length
           }
       )
     })
     .catch(error=>{
       console.log(error);
       window.alert("连接似乎出现问题")
     });
  }

  render() {
        return (
            <div className='DiscussListBox'>
                <Space>
                <h3>sort by:</h3>
                <Radio.Group defaultValue="time" buttonStyle="solid">
                    <Radio.Button value="time">Time</Radio.Button>
                    <Radio.Button value="discussionNum" disabled={true}>Likes</Radio.Button>
                    <Radio.Button value="subscribeNum" disabled={true}>Stars</Radio.Button>
                </Radio.Group>
                </Space>
                <br/>
                <br/>
                    <List
                        style={{width: '100%', resize: 'none'}}
                        split={true}
                        itemLayout="horizontal"
                        dataSource={this.state.data}
                        renderItem={item => 
                        <div className={'detailDiscussBox'}>
                        <List.Item
                        actions={[
                          <Report ReportUID={item.discussionId} ReporterUID={isLogined()? JSON.parse(localStorage.getItem('userData')).account:''} Time={moment().format("YYYY-MM-DD HH:mm:ss")}/>
                          ]}>
                            <List.Item.Meta
                                title={<a href={"#/personal/account="+item.account}>{item.account}</a>}
                                description={<p>{item.content}</p>}
                            />  
                            <p>{"发表时间:"+item.time}</p>   
                        </List.Item>
                        </div>
                        }
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
