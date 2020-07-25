import React, { Component } from 'react'
import Header from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'
import Helper from '../../components/comm/FloatHelper'
import { Radio, Col } from 'antd'

export default class SearchCompetitionPage extends Component{
    
    render(){
        return (
            <div class='searchCompetitionPage'>
                <Header></Header>
                <Col span={20} offset={2}>
                    <this.sortChoose></this.sortChoose>
                </Col>
                <Col span={20} offset={2}>
                    <this.compeInformation></this.compeInformation>
                </Col>
                <Col span={20} offset={2}>
                    <this.compeInformation></this.compeInformation>
                </Col>
                <Col span={20} offset={2}>
                    <this.compeInformation></this.compeInformation>
                </Col>
                <Col span={20} offset={2}>
                    <this.compeInformation></this.compeInformation>
                </Col>
                <Footer></Footer>
            </div>
        )
    }

    sortChoose()
    {
        return(
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">按发布时间排序</Radio.Button>
                <Radio.Button value="b">按匹配度排序</Radio.Button>
                <Radio.Button value="c">按结束时间排序</Radio.Button>
            </Radio.Group>
        )
    }

    compeInformation()//这部分需要写css进行布局
    {
        return(
            <div>
                <img></img>
                <h1>比赛名称</h1>
                <h1>简介</h1>
            </div>
        )
    }




}
