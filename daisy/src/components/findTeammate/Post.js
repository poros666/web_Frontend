import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card,Avatar,Space,Button,Input} from 'antd';
import '../../style/comm/comm.css'
import PostPageReport from '../findTeammate/report'
import moment from 'moment'
import axios from 'axios'
import {isLogined} from "../../utils/auth"

const { TextArea } = Input;
axios.defaults.baseURL='/api';
var userdata=JSON.parse(localStorage.getItem('userData'));

const Editor = ({onChange}) => (
    <>
        <TextArea rows={5} onChange={onChange} style={{width: '80%', resize: 'none',left:'10%'}} placeholder="填写入队申请"/>
    </>
  );

export default class Post extends Component {
    
    constructor(props){
        super(props)

        var groupId=this.props.groupId
        var MatchId=this.props.matchId
        var postId=this.props.postId
        
        this.state={
            NickName:"",
            Icon:"strange",
            Content:"",
            PostTime:"",
            Apply:'',
            Account:'',
            GroupId:groupId,
            PostId:postId,
            ProjctId:MatchId,
        }

        console.log(userdata);
        
        axios.get('/Post/'+postId+'?projectId='+MatchId+'&groupId='+groupId)
        .then(response=>{
            console.log(response)
            this.setState({
                NickName:response.data.nickname,
                Content:response.data.content,
                PostTime:response.data.postTime,
                Account:response.data.leaderAccount
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

    ContentChange = e => {
        this.setState({
          Apply:e.target.value
        })
      };
    
    render() {
        return (
            <div style={{backgroundColor:'whitesmoke'}}>
                <Card    
                    extra={//之后可以用button之类的包装一下做成超链接
                        //这里的头像要动态生成
                        <div align="right">

                        <a href={"#/personal"}>
                            <Avatar src={this.state.Icon}></Avatar>
                        </a>
                        <br/>                
                        <a href={"#/personal"}>{this.state.NickName}</a>
                        </div>
                        }
                    actions={[
                        <Button shape="round" 
                        type="primary"
                      onClick={()=>{
                        if(isLogined()){
                            if(this.state.Apply.length>0&&userdata.account!=null){
                                let dataSent={
                                  projctId:this.state.ProjctId,
                                  account:userdata.account,
                                  content:this.state.Apply,
                                  groupId:this.state.GroupId
                                }
                                console.log(dataSent)
                                axios.post('/Application',dataSent)
                                .then(response=>{
                                  console.log(response)
                                  window.alert("申请成功")
                                })      
                        }
                        else{
                            window.alert("申请失败")
                        }
                        }
                        else{
                            window.alert("未登录，确定后跳转至登陆界面")
                            window.location.hash ='#/login'
                        }
                    }}><p>申请进入小队</p></Button>,
                        <Button shape="round" 
                        type="primary"
                        onClick={()=>{
                            if(isLogined()){
                                if(userdata.account!=null){
                                    let dataSent={
                                      projctId:this.state.ProjctId,
                                      account:userdata.account,
                                      name:'Post',
                                      groupId:this.state.GroupId,
                                      postId:this.state.PostId
                                    }
                                    console.log(dataSent)
                                    axios.post('/PostStar',dataSent)
                                    .then(response=>{
                                      console.log(response)
                                      window.alert("收藏成功")
                                    })      
                            }
                            else{
                                window.alert("收藏失败")
                            }
                            }
                            else{
                                window.alert("未登录，确定后跳转至登陆界面")
                                window.location.hash ='#/login'
                            }
                        }}><p>收藏该帖</p></Button>,
                    <PostPageReport 
                    ReportUID={this.state.PostId}
                    ReporterUID={userdata.account}
                    Time={moment().format("YYYY-MM-DDTHH:mm:ssC")}
                    />
                    ]}      
                >
                    <div>
                    <p style={{textAlign:'left'}}>{ this.state.Content}</p>
                    <p id="date" >{this.state.PostTime}</p>
                    </div>
                </Card>
                <br/><br/>
                <Editor onChange={this.ContentChange}/>
                <br/><br/>
            </div>
        )
    }
}
