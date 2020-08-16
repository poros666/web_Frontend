import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import Footer from '../../components/comm/Footer'
import React, { Component } from 'react'
import '../../style/findTeam/findTeam.css'
import { Divider } from 'antd';
import Post from '../../components/findTeammate/Post'
import { Tooltip } from 'antd';
import moment from 'moment';
import '../../style/comm/comm.css'
import 'antd/dist/antd.css';


export default class PostPage extends Component {

    constructor(props){
        super(props)
        //let tempId=this.props.match.params.id
  
        this.state={
          Pid:this.props.location.query.Pid
         }
      }
  
  
      componentWillMount(){
  
  
  
        //至此为止我们接收到了动态传过来了id，接着就是根据id取到值
  
  
      }
    render() {
        return (
            <div id='WebPage'>
            <div>
                <HeaderNav/>
                <TeamNav/>
            </div>
            <Divider/>
            <div>
                <Post postId={this.state.Pid}/>
            </div>
            <Divider/>
            <div>
                <Footer/>
            </div>
            </div>
        )
    }
}
