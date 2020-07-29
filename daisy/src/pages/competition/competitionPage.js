import React, { Component } from 'react'
import { Col, Pagination, Row } from "antd"
import 'antd/dist/antd.css'
import Footer from '../../components/comm/Footer'
import Header from '../../components/comm/HeaderNav'
//import Helper from '../../components/comm/FloatHelper'

import CompetitionImage from './component/competitionImage'
import CompetitionName from './component/competitionName'
import FindTeamBotton from './component/findTeamButton'
import CompetitionInformation from './component/competitionInformation'
import RaiseDiscuss from './component/raiseDiscuss'
import DiscussList from './component/discussList'

export default class CompetitionPage extends Component 
{
    render() 
    {
        return (
            <div class='CompetitionPage'>
                <Header></Header>
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
                <Col offset={8}>
                    <Pagination showQuickJumper defaultCurrent={1} total={500}/>
                </Col>
                <Footer></Footer>
            </div>
        )
    }

   
   
}
