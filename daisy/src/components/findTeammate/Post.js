import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card,Avatar,Space,Button } from 'antd';
import '../../style/comm/comm.css'
import PostPageReport from '../findTeammate/report'
import moment from 'moment'
import axios from 'axios'

export default class Post extends Component {
    
    constructor(props){
        super(props)

        var tempId=this.props.postId
        
        this.state={
            NickName:"",
            Icon:"strange",
            Content:"",
            PostTime:"",
        }
        
        axios.get('http://mock-api.com/5g7AeqKe.mock/PostPage?PostId='+tempId)
        .then(response=>{
            console.log(response.data.Content)
            this.setState({
                NickName:response.data.NickName,
                Content:response.data.Content,
                PostTime:response.data.PostTime
            })
            if(response.data.Icon!=null){
                this.setState({
                    Icon:response.data.Icon
                })
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className='site-card-border-less-wrapper'>
                <Card    
                    extra={//之后可以用button之类的包装一下做成超链接
                        //这里的头像要动态生成
                        <div align="right">

                        <a href={"#/personal"}>
                            <Avatar src={require("../../img/avatar/"+this.state.Icon+".jpg")}></Avatar>
                        </a>
                        <br/>                
                        <a href={"#/personal"}>{this.state.NickName}</a>

                        </div>
                        }
                >

                {
                    //下面是帖子的内容部分
                }
                <p>
                   { this.state.Content}
                </p>
                <p id="date">
                    {this.state.PostTime}
                </p>
                </Card>
                <br/>
                <Space>
                    <Button ghost><p style={{color:'black'}}>申请进入小队</p></Button>
                    <Button ghost><p style={{color:'black'}}>收藏</p></Button>
                    <Button ghost><p style={{color:'black'}}>分享</p></Button>
                    <PostPageReport ReportUID={this.state.NickName} ReporterUID='test2' Time={moment().format("YYYY-MM-DD HH:mm:ss")}/>
                </Space>
            </div>
        )
    }
}
