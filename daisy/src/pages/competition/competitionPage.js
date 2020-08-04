import React, { Component } from 'react'
import { Col, Pagination, Button } from "antd"
import 'antd/dist/antd.css'
import Footer from '../../components/comm/Footer'
import Header from '../../components/comm/HeaderNav'
//import Helper from '../../components/comm/FloatHelper'
import './style/competitionPage.css'
import TextArea from 'antd/lib/input/TextArea'

export default class CompetitionPage extends Component 
{
    render() 
    {
        return (
            <div class='CompetitionPage'>
                <Header></Header>
                <this.competitionImage></this.competitionImage>
                <this.competitionName></this.competitionName>
                <this.findTeamBotton></this.findTeamBotton>
                <this.competitionInformation></this.competitionInformation>
                <this.raiseDiscuss></this.raiseDiscuss>
                <this.discussList></this.discussList>
                <Col offset={8}>
                    <Pagination showQuickJumper defaultCurrent={1} total={500}/>
                </Col>
                <Footer></Footer>
            </div>
        )
    }

    competitionImage()  {
        return (
            <div className='comPageImageBox'>
                <image>比赛图片</image>
            </div>
        )
    
    }

    competitionName()
    {
        return (
            <div className='comPageNameBox'>
                <h1>比赛名字</h1>
            </div>
        )
    }

    findTeamBotton(){
        return (
            <div className='comPageFindTeamBox'>
                <Button>组队</Button>
            </div>
        )
    }


    competitionInformation()
    {
        return(
            <div className='comPageIntrouduceBox'>
                <h1>比赛简介</h1>
                <p>
                    阿巴阿巴阿巴<br/>
                    阿巴阿巴阿巴<br/>
                    阿巴阿巴阿巴<br/>
                    阿巴阿巴阿巴<br/>
                </p>
            </div>
        )
    }

    raiseDiscuss()
    {
        return (
            <div className='comPageDiscussBox'>
                <TextArea
                placeholder="‘在此输入你的讨论内容’"
                autoSize={{ minRows: 5, maxRows: 20 }}
                allowClear
                ></TextArea>
            </div>
        )
    }

    discussList()
    {
        return (
            <div className='comPageDiscussBorad'>
                <div className='comPageDiscussTextBox'></div>
                <div className='comPageDiscussTextBox'></div>
                <div className='comPageDiscussTextBox'></div>
                <div className='comPageDiscussTextBox'></div>
            </div>
        )
    }
}
