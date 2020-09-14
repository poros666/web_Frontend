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


export default class PostPage extends Component {

    constructor(props){
        super(props)

        this.state={
          ProjctId:this.props.match.params.ProjctId,
          Pid:this.props.match.params.id
         }
      }

    render() {
        return (
            <div>
                <HeaderNav/>
                <br/><br/>
                <TeamNav matchId={this.state.ProjctId}/>
                <div id='WebPage'>
                <Divider/>
                <div>
                    <Post postId={this.state.Pid}/>
                </div>
                <Divider/>
                <FloatHelper/>
                <Footer/>
                </div>
            </div>
        )
    }
}
