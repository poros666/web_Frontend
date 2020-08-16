import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card,Avatar,Space,Button } from 'antd';
import '../../style/comm/comm.css'
import PostPageReport from '../findTeammate/report'
import moment from 'moment'

const data_1={
    authorUid:110,
        authorAvatar: "boss",
        authorName: "boss",
        bordered:false,
        Pid:1,
        title: 'Ant Design Title 1',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team'
  }

const data_2={
        authorUid:110,
        authorAvatar: "boss",
        authorName: "boss",
        bordered:false,
        Pid:2,
        title: 'Ant Design Title 2',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team'
      }

const data_3={
        authorUid:110,
        authorAvatar: "boss",
        authorName: "boss",
        bordered:false,
        Pid:3,
        title: 'Ant Design Title 3',
        content:'Ant Design, a design language for background applications, is refined by Ant UED Team'
      }

const data_4={
        authorUid:111,
        authorAvatar: "strange",
        authorName: "strange",
        bordered:false,
        Pid:4,
        title: 'Ant Design Title 4',
        content:'zzzzzz我睡着了而且我想摸鱼'
      }


const data_5={
        authorUid:111,
        authorAvatar: "strange",
        authorName: "strange",
        bordered:false,
        Pid:5,
        title: 'Ant Design Title 5',
        content:'我没睡觉也没摸鱼但我就是写不出'
      } 

const SourceDataList=[]

function init(){
    SourceDataList.push(data_1)
    SourceDataList.push(data_2)
    SourceDataList.push(data_3)
    SourceDataList.push(data_4)
    SourceDataList.push(data_5)
}

 function getPostContent(Pid){
     for(let i=0;i<SourceDataList.length;i++){
         if(Pid==SourceDataList[i].Pid){
             return i;
         }
     }
}


export default class Post extends Component {
    
    constructor(props){
        super(props)

        var tempId=this.props.postId

        //初始化模拟数据，后面会删除
        init()
                
        const sourceData=[
            {
            title:"Card title" ,
            content:"this is the card content for testing",
            bordered:false,
            authorName: "test example",
            authorUid: 111,
            authorAvatar: "boss",
            }
        ]


        this.state={
            data:SourceDataList[getPostContent(tempId)]
        }
    }
    
    render() {
        return (
            <div className='site-card-border-less-wrapper'>
                <Card    
                    title={this.state.data.title}
                    bordered={this.state.data.bordered} 
                    extra={//之后可以用button之类的包装一下做成超链接
                        //这里的头像要动态生成
                        <div align="right">

                        <a href={"#/PostPage/"+this.state.data.authorUid}>
                            <Avatar src={require("../../img/avatar/"+this.state.data.authorAvatar+".jpg")}></Avatar>
                        </a>
                                        
                        <p>{this.state.data.authorName}</p>

                        </div>
                        }
                >

                {
                    //下面是帖子的内容部分
                }
                <p>
                   { this.state.data.content}
                </p>
                </Card>
                <br/>
                <Space>
                    <Button ghost><p style={{color:'black'}}>申请进入小队</p></Button>
                    <Button ghost><p style={{color:'black'}}>收藏</p></Button>
                    <Button ghost><p style={{color:'black'}}>分享</p></Button>
                    <PostPageReport ReportUID={this.state.data.authorUid} ReporterUID='test2' Time={moment().format("YYYY-MM-DD HH:mm:ss")}/>
                </Space>
            </div>
        )
    }
}
