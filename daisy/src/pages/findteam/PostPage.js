import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import Footer from '../../components/comm/Footer'
import React, { Component } from 'react'
import { Layout } from 'antd';
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
        let tempId=this.props.match.params.id
  
        //这里根据tempid请求数据
        const sourceData = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(1, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(1, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
          {
            author: 'kk',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(2, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(2, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
        ];
  
        this.state={
          data:sourceData,
          Pid:tempId
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
