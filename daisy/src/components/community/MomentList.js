//
// made by ykn
//
import React, { Component } from 'react'
import { List, Avatar,Col, Pagination,Space } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import Axios from 'axios'
import './config'
import CONSTURL from './config'
import loading from './loading'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);





export default class MomentList extends Component {
    constructor(props){
      super()
      this.state={
        isloading:true,
        istotalloading:true,
        currentData:[],
        total:10,//这里的total也是要获取的数据
        pageSize: 10,
        ordertype:'time',
        pageNumber:parseInt(window.location.hash.slice(-1), 0) || 1 //获取当前页面的hash值，转换为number类型
      }
    }

    componentDidMount() {
      this.handleAnchor() //页面刷新时回到刷新前的page
      this.getMomentCount()//获取动态总数
    }

    getMomentCount(){
      var url=CONSTURL.hosturl+CONSTURL.getMomentCountUrl
      Axios.get(url).then((res)=>{
        console.log(res.data.Count)
        this.setState({total:res.data.Count})
        this.setState({istotalloading:false})
      })
    }

    handleAnchor() {
      this.onPageChange(this.state.pageNumber, this.state.pageSize); //手动调用onPageChange,传入当前页数和每页条数
    }
    
    onPageChange=(page,pageSize)=>{
      this.setState({
        pageNumber: page
      }, () => {
        window.location.hash = `#/Community/pagenum=${page}`; //设置当前页面的hash值为当前page页数
      })
      this.setState((state)=>{
        for(let i=0;i<state.pageSize;i++){
          state.currentData.pop()
        }
        //这里要负责接受数据
        var momentUrl=CONSTURL.momentURl1+this.state.ordertype+CONSTURL.momentURL2+page
        //var momentUrl='/api/Moment?OrderBy='+'&PageNum='

        var url=CONSTURL.hosturl+momentUrl
        Axios.get(url).then((res)=>{
          //console.log(res)
          for(var i=0;i<res.data.length;i++){
            state.currentData.push(res.data[i])
          }
          //console.log(state.currentData)
          this.setState({isloading:false})
        })
        return{
          currentData:state.currentData,
        }
      }
     );
   }

    render() {
        return (
            (this.state.isloading || this.state.istotalloading)?<loading/>:
            <div>
                  <List
                    itemLayout="horizontal"
                    dataSource={this.state.currentData}
                    renderItem={item => (
                      <List.Item
                          key={item.Title}
                          actions={[
                                    <IconText icon={StarOutlined} text={item.StarNum} key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text={item.LikeNum} key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text={item.CommentNum} key="list-vertical-message" />,
                                  ]}
                                  >
                          <List.Item.Meta
                            avatar={

                              //头像的来源和指向的地址
                              <a href={"#/Moment/"+item.Account}>
                                <Avatar src={require("../../img/avatar/"+item.icon+".jpg")}></Avatar>
                              </a>
                            }

                            //帖子的名字和指向的地址，传一个pid，moment_id
                              title={<a href ={"#/Moment/"+item.MomentId}>{item.Title}</a>}


                              //这里还需要处理
                              description={<p>{item.Content}</p>}
                              
                          />

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
