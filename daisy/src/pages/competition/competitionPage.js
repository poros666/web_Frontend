import React, { Component } from 'react'
import { Col,  Row } from "antd"
import 'antd/dist/antd.css'
import Footer from '../../components/comm/Footer'
import Header from '../../components/comm/HeaderNav'
import Helper from '../../components/comm/FloatHelper'

import CompetitionName from '../../components/competition/competitionName'
import FindTeamBotton from '../../components/competition/findTeamButton'
import CompetitionInformation from '../../components/competition/competitionInformation'
import RaiseDiscuss from '../../components/competition/raiseDiscuss'
import DiscussList from '../../components/competition/discussList'
import SubscriptionButton from '../../components/competition/subscriptionButton'

import '../../style/competition/competition.css'

import axios from 'axios'

export default class CompetitionPage extends Component 
{
    constructor(props){
        super(props)
        this.state={
            compID:this.props.match.params.compID,
            compName:'',
            compImgUrl:'',
            compInformation:'',
            compHost:'',
            compParticipantsNumber:'',
            compStartTime:'',
            compEndTime:''
        }
    }
    
   
   componentDidMount(){
       this.getData()
   }


   getData()
    {
        var requesturl='/Project/'+this.state.compID
        axios.get(requesturl)
        .then(response=>{
            console.log(response);
            this.setState(
                {
                    compName:response.data.name,
                    compInformation:response.data.introduction,
                    compHost:response.data.host,
                    compParticipantsNumber:response.data.participantsNumber,
                    compStartTime:response.data.startTime,
                    compEndTime:response.data.endTime
                })
          })
          .catch(error=>{
            console.log(error);
            window.alert("连接出现问题，点击确定跳转回主页")
            window.location.hash ='#/home'
          });
    }
     

    render() 
    {
        return (
            <div className='CompetitionPage'>
                <Header/>
                <div style={{height:'50px'}}/>
                <Helper/>
            <div className='CompetionContentBox'>
                <div className={'CompetitionNameBox'}>
                <Row gutter={16} align={"middle"} >
                    <Col span={6} offset={9}>
                        <CompetitionName compName={this.state.compName}/>
                    </Col>
                    <Col span={6}>
                        <FindTeamBotton compID={this.state.compID}/>
                        <br/>
                        <SubscriptionButton compID={this.state.compID}/>
                    </Col>
                </Row>
                </div>
                <Col offset={2} span={20}>
                <CompetitionInformation compInformation={this.state.compInformation} compHost={this.state.compHost}
                 compParticipantsNumber={this.state.compParticipantsNumber} compStartTime={this.state.compStartTime} 
                 compEndTime={this.state.compEndTime}/>
                <RaiseDiscuss compID={this.state.compID} className={'RaiseDiscuss'}/>
                <DiscussList compID={this.state.compID}/>
                </Col>
            </div>
            <div style={{height:'50px'}}/>
                <Footer/>
            </div>
        )
    }

  
   
}
