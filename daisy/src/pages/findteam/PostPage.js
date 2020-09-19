import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import Footer from '../../components/comm/Footer'
import React, { Component } from 'react'
import '../../style/findTeam/findTeam.css'
import { Divider} from 'antd';
import Post from '../../components/findTeammate/Post'
import FloatHelper from '../../components/comm/FloatHelper'
import '../../style/comm/comm.css'
import 'antd/dist/antd.css';
import { isLogined } from '../../utils/auth'


export default class PostPage extends Component {

    constructor(props){
        if(!isLogined()){
            window.alert('连接出错，点击确定返回主页.')
            window.location.hash ='#/home'
        }
        super(props)
        let projctId=0;
        let groupId=0;
        let postId=0;
        if(this.props.match.params.ProjctId!=null){
            projctId=this.props.match.params.ProjctId;
        }
        if(this.props.match.params.groupId!=null){
            groupId=this.props.match.params.groupId
        }
        if(this.props.match.params.id!=null){
            postId=this.props.match.params.id
        }
        this.state={
            ProjctId:projctId,
            GroupId:groupId,
            PostId:postId
        }
      }

    render() {
        return (
            <div>
                <HeaderNav/>
                <br/><br/>
                <div id='TeamNav'>
                <TeamNav matchId={this.state.ProjctId}/>
                </div>
                <div id='PostPage'>
                <Divider/>
                <div id='WebPage'>
                <div id='Post'>
                    <Post matchId={this.state.ProjctId} groupId={this.state.GroupId} postId={this.state.PostId}/>
                </div>
                <Divider/>
                <FloatHelper/>
                </div>
                <Footer/>
                </div>
            </div>
        )
    }
}
