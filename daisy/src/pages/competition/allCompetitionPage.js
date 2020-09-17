import React, { Component } from 'react'
import Header from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'
import Helper from '../../components/comm/FloatHelper'
import CompetitionList from '../../components/competition/competitionList'
import { Col,Radio} from 'antd'
import 'antd/dist/antd.css'


export default class AllCompetitionPage extends Component {

    constructor()
    {
        super()
        this.state={
            sortOrder:'time',
        }
    }

    render(){
        return (
            <div class='allCompetitionPage'>
                <Header/>
                <div style={{height:'70px'}}/>
                <Helper/>
                <Col offset={2} span={20}>
                <div>
                <Radio.Group defaultValue="time" buttonStyle="solid" onChange={(e)=>{this.setState({sortOrder:e.target.value})}}>
                    <Radio value="time">按发布时间排序</Radio>
                    <Radio value="discusstion" disabled={true}>按讨论热度排序</Radio>
                    <Radio value="subscribe" disabled={true}>按订阅数量排序</Radio>
                </Radio.Group>
                </div>
                <CompetitionList sortOrder={this.state.sortOrder}/>
                </Col>
                <Footer/>
            </div>
        )
    }


    
}
