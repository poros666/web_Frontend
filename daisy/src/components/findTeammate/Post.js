import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card,Avatar,Space,Button } from 'antd';
import '../../style/comm/comm.css'




 function getPostContent(Pid){
  }


export default class Post extends Component {
    
    constructor(props){
        super(props)


        var tempId=this.props.postId
        
        getPostContent(tempId)
                
        const sourceData=[
            {
            title:"Card title" ,
            content:"this is the card content for testing",
            bordered:false ,
            authorName: "test example",
            authorUid: 111,
            authorAvatar: "boss",
            }
        ]


        this.state={
            data:sourceData
        }
    }
    
    render() {
        return (
            <div className='site-card-border-less-wrapper'>
                <Card    
                    title={this.state.data[0].title}
                    bordered={this.state.data[0].bordered} 
                    extra={//之后可以用button之类的包装一下做成超链接
                        //这里的头像要动态生成
                        <div align="right">

                        <a href={"#/PostPage/"+this.state.data[0].authorUid}>
                            <Avatar src={require("../../img/avatar/"+this.state.data[0].authorAvatar+".jpg")}></Avatar>
                        </a>
                                        
                        <p>{this.state.data[0].authorName}</p>

                        </div>
                        }
                >

                {
                    //下面是帖子的内容部分
                }
                <p>
                   { this.state.data[0].content}
                </p>
                </Card>
                <br/>
                <Func/>
            </div>
        )
    }
}



function Func() {
    return (
      <Space>
        <Button ghost><p style={{color:'black'}}>申请进入小队</p></Button>
        <Button ghost><p style={{color:'black'}}>收藏</p></Button>
        <Button ghost><p style={{color:'black'}}>分享</p></Button>
        <Button ghost><p style={{color:'black'}}>举报</p></Button>     
      </Space>
    );
  }