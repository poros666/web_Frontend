import { PageHeader,Descriptions } from 'antd';
import { Input } from 'antd';
import React, { Component } from 'react'
import axios from 'axios'
import '../../style/findTeam/findTeam.css'

export default class teamNav extends Component {

  /*接收比赛名称*/
  constructor(props){
    super(props);
    let matchId=this.props.id;
    this.state={
      matchInfo:[],
      matchname:"",
      matchdescription:""
    }
}

componentDidMount=()=>{
  axios.get('http://mock-api.com/5g7AeqKe.mock/matchInfo')
  .then(response=>{
    console.log(response.data[0].Nickname)
    this.setState({
      matchInfo:response.data
    })
    this.setState({
      matchname:this.state.matchInfo[0].name,
      matchdescription:this.state.matchInfo[0].description
    })
    console.log(this.state.matchdescription)
  })
  .catch(error=>{
    console.log(error);
  })
}

render() {
    return (
    <>
      <div id="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title={this.state.matchname}
        >
          <Descriptions size="small">
            <Descriptions.Item label="比赛简介">{this.state.matchdescription}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      </>
    )
  }
}