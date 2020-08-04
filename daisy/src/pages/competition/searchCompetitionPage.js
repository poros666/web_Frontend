import React, { Component } from 'react'
import Header from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'
//import Helper from '../../components/comm/FloatHelper'
import { Radio, Col, Pagination } from 'antd'
import 'antd/dist/antd.css'
import './style/searchCompetitionPage.css'


export default class SearchCompetitionPage extends Component{
    
    render(){
        return (
            <div class='searchCompetitionPage'>
                <Header></Header>
                <this.sortChoose></this.sortChoose>
                <this.compeInformation></this.compeInformation>
                <this.compeInformation></this.compeInformation>
                <this.compeInformation></this.compeInformation>
                <this.compeInformation></this.compeInformation>
                <Col offset={8}>
                <Pagination showQuickJumper defaultCurrent={1} total={500}></Pagination>
                </Col>
                <Footer></Footer>
            </div>
        )
    }

    sortChoose()
    {
        return(
            <div className='sortChoseBox'>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">按发布时间排序</Radio.Button>
                    <Radio.Button value="b">按匹配度排序</Radio.Button>
                    <Radio.Button value="c">按结束时间排序</Radio.Button>
                </Radio.Group>
            </div>
        )
    }

    compeInformation()
    {
        return(
            <div className='informationBox'>
                <div className='imageBox'>
                    <img></img>
                </div>
                <div className='nameBox'>
                    <h1>比赛名称</h1>
                </div>
                <div className='introduceBox'>
                    <h1>简介</h1>
                </div>
            </div>
        )
    }




}
