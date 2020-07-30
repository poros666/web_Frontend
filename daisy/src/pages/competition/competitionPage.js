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

export default class CompetitionPage extends Component 
{
    render() 
    {
        return (
            <div class='CompetitionPage'>
                <Header/>
                <Helper/>
                <Row gutter={16} align={"middle"}>
                    <Col span={7} offset={2}>
                        <CompetitionImage/>
                    </Col>
                    <Col span={6}>
                        <CompetitionName/>
                    </Col>
                    <Col span={7}>
                        <FindTeamBotton/>
                    </Col>
                </Row>
                <Col offset={2} span={20}>
                <CompetitionInformation/>
                <RaiseDiscuss/>
                <DiscussList/>
                </Col>
                <Footer/>
            </div>
        )
    }

   
   
}
