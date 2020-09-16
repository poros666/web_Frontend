import React, { Component } from 'react'
import { Col,  Row } from "antd"
import 'antd/dist/antd.css'
import Footer from '../../components/comm/Footer'
import Header from '../../components/comm/HeaderNav'
import Helper from '../../components/comm/FloatHelper'

import CompetitionImage from '../../components/competition/competitionImage'
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
    
   /* 
   componentDidMount(){
       getData()
   }


   getData()
    {
        var requesturl='/api/Project/'+this.state.compID
        axios.get(requesturl)
          .then(function (response) {
            console.log(response);
            this.setstate(
                {
                    compName:response.data.Name,
                    compInformation:response.data.Introduction,
                    compHost:response.data.Host,
                    compParticipantsNumber:response.data.ParticipantsNumber,
                    compStartTime:response.data.StartTime,
                    compEndTime:response.data.EndTime
                }
            )
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    */ 

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
                    <Col span={7} offset={2}>
                        <CompetitionImage compImgUrl={this.state.compImgUrl}/>
                    </Col>
                    <Col span={6}>
                        <CompetitionName compName={this.state.compName}/>
                    </Col>
                    <Col span={6}>
                        <FindTeamBotton compID={this.state.compID} compName={this.state.compName} compInformation={this.state.compInformation}/>
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
