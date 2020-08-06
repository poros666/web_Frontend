//
// made by ykn
//
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card,Avatar,Space,Button } from 'antd';
import '../../style/comm/comm.css'
import CollectionsPageReport from "../comm/report"




 function getMomentContent(Pid){
    //do something
  
  }


export default class ReadMoment extends Component {
    
    constructor(props){
        super(props)


        var tempId=this.props.momentId
        
        getMomentContent(tempId)
                
        const sourceData=[
            {
            title:"Card title" ,
            content:"this is the card content for testing",
            bordered:false ,
            authorName: "i is kk i think cry",
            authorUid: 132,
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

                        <a href={"#/Moment/"+this.state.data[0].authorUid}>
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
        //     <div className="site-card-border-less-wrapper">

        //         <p>注释里面就别检查了8</p>
        //    
        //   </div>
        )
    }
}



function Func() {
    return (
      <Space>
        <Button ghost><p style={{color:'black'}}>点赞</p></Button>
        <Button ghost><p style={{color:'black'}}>收藏</p></Button>
        <Button ghost><p style={{color:'black'}}>分享</p></Button>
        <CollectionsPageReport/>     
      </Space>
    );
  }

