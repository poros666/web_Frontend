import React, { Component } from 'react'
import Header from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'
//import Helper from '../../components/comm/FloatHelper'
import SortChoose from '../../components/competition/sortChoose'
import CompetitionList from '../../components/competition/competitionList'
import { Col} from 'antd'
import 'antd/dist/antd.css'



export default class SearchCompetitionPage extends Component{
    
    render(){
        return (
            <div class='searchCompetitionPage'>
                <Header></Header>
                <Col offset={2} span={20}>
                <SortChoose/>
                <CompetitionList/>
                </Col>
                <Footer></Footer>
            </div>
        )
    }

}
