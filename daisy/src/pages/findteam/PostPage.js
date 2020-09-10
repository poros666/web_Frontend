import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import Footer from '../../components/comm/Footer'
import React, { Component } from 'react'
import '../../style/findTeam/findTeam.css'
import { Divider} from 'antd';
import Post from '../../components/findTeammate/Post'
import '../../style/comm/comm.css'
import 'antd/dist/antd.css';


export default class PostPage extends Component {

    constructor(props){
        super(props)

        console.log(this.props.match.params)
  
        this.state={
          Pid:this.props.match.params.id
         }
      }
  
      componentWillMount(){
  
  
  
        //至此为止我们接收到了动态传过来了id，接着就是根据id取到值
  
  
      }
    render() {
        return (
            <div>
                <HeaderNav/>
                <br/><br/>
                <TeamNav/>
                <div id='WebPage'>
                <Divider/>
                <div>
                    <Post postId={this.state.Pid}/>
                </div>
                <Divider/>
                <div>
                    <Footer/>
                </div>
                </div>
            </div>
        )
    }
}
