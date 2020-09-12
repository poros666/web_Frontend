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

export default class CompetitionPage extends Component 
{
    constructor(props){
        super(props)
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
                    <Col span={7} offset={2}>
                        <CompetitionImage/>
                    </Col>
                    <Col span={6}>
                        <CompetitionName/>
                    </Col>
                    <Col span={6}>
                        <FindTeamBotton compID={this.props.match.params.compID}/>
                        <br/>
                        <SubscriptionButton compID={this.props.match.params.compID}/>
                    </Col>
                </Row>
                </div>
                <Col offset={2} span={20}>
                <CompetitionInformation/>
                <RaiseDiscuss compID={this.props.match.params.compID} className={'RaiseDiscuss'}/>
                <DiscussList compID={this.props.match.params.compID}/>
                </Col>
            </div>
            <div style={{height:'50px'}}/>
                <Footer/>
            </div>
        )
    }

  
   
}
