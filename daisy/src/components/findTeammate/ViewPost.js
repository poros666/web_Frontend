import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { List, Avatar } from 'antd';
import{  Pagination  } from 'antd';
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import PostPage from '../../pages/findteam/PostPage'

const PostNum=4;

//再这里绑定元数据
const data_1= [
    {
      Uid:110,
      Pid:1,
      avatarSrc:'boss',
      title: 'Ant Design Title 1',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      Uid:110,
      Pid:2,
      avatarSrc:'boss',
      title: 'Ant Design Title 2',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Uid:110,
      Pid:3,
      avatarSrc:'boss',
      title: 'Ant Design Title 3',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Uid:111,
      Pid:4,
      avatarSrc:'strange',
      title: 'Ant Design Title 4',
      description:'zzzzzz我睡着了而且我想摸鱼'
    },
  ];

  const data_2= [
    {
      Uid:110,
      Pid:1,
      avatarSrc:'boss',
      title: 'Ant Design Title 1',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      Uid:110,
      Pid:2,
      avatarSrc:'boss',
      title: 'Ant Design Title 2',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Uid:110,
      Pid:3,
      avatarSrc:'boss',
      title: 'Ant Design Title 3',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Uid:111,
      Pid:5,
      avatarSrc:'strange',
      title: 'Ant Design Title 5',
      description:'我没睡觉也没摸鱼但我就是写不出'
    },
  ];

export default class CommunityContent extends Component {

  constructor(props){
    super(props)
    this.state={
      currentData:[],
      total: 50,
      pageSize: 1,
      pageNumber: parseInt(window.location.hash.slice(-1), 0) || 1 //获取当前页面的hash值，转换为number类型
     }
     this.onPageChange=this.onPageChange.bind(this);
  }

  componentDidMount() {
    this.handleAnchor() //页面刷新时回到刷新前的page
  }
  handleAnchor() {
    this.onPageChange(this.state.pageNumber, this.state.pageSize); //手动调用onPageChange,传入当前页数和每页条数
  }

  onPageChange=(page,pageSize)=>{
    this.setState({
      pageNumber: page
    }, () => {
      window.location.hash = `#/findteam/pagenum=${page}`; //设置当前页面的hash值为当前page页数
    })
    this.setState((state)=>{
    if(state.pageNumber%2==1){
      for(let i=0;i<PostNum;i++){
        state.currentData.pop();
      }
      for(let i=0;i<PostNum;i++){
        state.currentData.push(data_1[i]);
      }
      return{
        currentData:state.currentData,
      }
    }
    else{
      for(let i=0;i<PostNum;i++){
        state.currentData.pop();
      }
      for(let i=0;i<PostNum;i++){
        state.currentData.push(data_2[i]);
      }
      return{
        currentData:state.currentData,
      }
    }
   });
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
                                    <Avatar src={require("../../img/avatar/"+item.avatarSrc+".jpg")}></Avatar>
                                  </a>
                                }
                                title={<a href={"#/PostPage/"+item.Pid}>{item.title}</a>}
                                description={<p>{item.description}</p>}
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