import React, { Component } from 'react'
import {List,Col, Pagination} from 'antd'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
const data = [
    {
        ID:1,
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        ID:2,
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        ID:3,
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        ID:4,
        logosrc: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        competitionname: 'ant design part 1',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }
];


export default class CompetitionList extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      data:[],
      currentData:[],
      total: 0,
      pageSize: 3,
      pageNumber: parseInt(window.location.hash.slice(-1), 0) || 1 //获取当前页面的hash值，转换为number类型
     }
  }

  componentDidMount() {
    this.getData()
    this.handleAnchor() //页面刷新时回到刷新前的page
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
    this.setState((state)=>{
    for(let i=0;i<state.pageSize;i++){
      state.currentData.pop();
    }
    for(let i=pageSize*(page-1);i<state.total&&i<pageSize*page;i++){
      state.currentData.push(data[i]);
    }
      return{
        currentData:state.currentData,
      }
    }
   );
 }
 
 getData()
 {
   axios.get('/api/Project')
   .then(function (response) {
    console.log(response);
    this.setstate(
        {
          data:response.data,
          total:response.data.length
        }
    )
  })
  .catch(function (error) {
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
                    title={<a href={"#/compPage/id="+item.ID+'/'}>{item.competitionname}</a>
                    }
                    description={item.description}
                    />
                    {item.content}
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
