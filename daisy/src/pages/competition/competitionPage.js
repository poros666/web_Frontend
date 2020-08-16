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

export default class CompetitionPage extends Component 
{
    constructor(props){
        super(props)
    }

    render() 
    {
       

        return (
            <div class='CompetitionPage'>
                <Header/>
                <div style={{height:'90px'}}/>
                <Helper/>
                <Row gutter={16} align={"middle"}>
                    <Col span={7} offset={2}>
                        <CompetitionImage/>
                    </Col>
                    <Col span={6}>
                        <CompetitionName/>
                        <div>
                            {this.props.match.params.compID}
                        </div>
                    </Col>
                    <Col span={7}>
                        <FindTeamBotton compID={this.props.match.params.compID}/>
                        <br/>
                        <SubscriptionButton compID={this.props.match.params.compID}/>
                    </Col>
                </Row>
                <Col offset={2} span={20}>
                <CompetitionInformation/>
                <RaiseDiscuss compID={this.props.match.params.compID}/>
                <DiscussList compID={this.props.match.params.compID}/>
                </Col>
                <Footer/>
            </div>
        )
    }

  
   
}
