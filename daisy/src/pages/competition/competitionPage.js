import React, { Component } from 'react'
import { Button, Col, Row, Space } from "antd"
import Footer from '../../components/comm/Footer'
import Header from '../../components/comm/HeaderNav'
import Helper from '../../components/comm/FloatHelper'


export default class CompetitionPage extends Component 
{
    render() 
    {
        return (
            <div class='CompetitionPage'>
                <Header></Header>
                    <Row>
                    <Col span={8}>
                        <this.competitionImage></this.competitionImage>
                    </Col>
                    <Col span={8}>
                        <this.competitionName></this.competitionName>
                    </Col>
                    <Col span={8}>
                        <this.findTeamBotton></this.findTeamBotton>
                    </Col>
                </Row>
                <Col span={20} offset={2}>
                    <this.competitionInformation></this.competitionInformation>
                </Col>
                <Col span={20} offset={2}>
                    <this.raiseDiscuss></this.raiseDiscuss>
                </Col>
                <Col span={20} offset={2}>
                    <this.discussList></this.discussList>
                </Col>
                <Footer></Footer>
            </div>
        )
    }

    competitionImage()  {
        return (
            <div>
                <image>比赛图片</image>
            </div>
        )
    
    }

    competitionName()
    {
        return (
            <div>
                <h1>比赛名字</h1>
            </div>
        )
    }

    findTeamBotton(){
        return (
            <div>
                <Button>组队</Button>
            </div>
        )
    }


    competitionInformation()
    {
        return <h1>比赛简介</h1>
    }

    raiseDiscuss()
    {
        return <input></input>
    }

    discussList()
    {
        return (
            <ul>
                <li>23333333333</li>
                <li>23333333333</li>
                <li>23333333333</li>
                <li>23333333333</li>
            </ul>
        )
    }
}
