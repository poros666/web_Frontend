import React, { Component,BackTop } from 'react'
import ReactDOM from 'react-dom'
import {Layout,Row, Col, Divider,Menu, Breadcrumb} from 'antd'
import 'antd/dist/antd.css'
import BackToTop from '../components/comm/BackToTop'
import Footer from '../components/comm/Footer'
import HeaderNav from '../components/comm/HeaderNav'
import FloatHelper from '../components/comm/FloatHelper'
import actComShow from './Homepage/actComShow'
import ActivityShow from './Homepage/ActivityShow'
import CompShow from'./Homepage/CompShow'
import CommunityShow from'./Homepage/CommunityShow'
import '../style/homepage.css'

// const { Header, Content, Footer, Sider } = Layout;

class Homepage extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
 
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <HeaderNav/>
                <div class='actComShow' > 
                    {/* ant栅栏：左边为活动展示区，右边为比赛展示区 */}
                    <actComShow/>
                    <Row>
                        <Col flex={2}>2 / 5</Col>
                        <Col flex={3}>3 / 5</Col>
                    </Row>
                    {/* <div class='activityShow'>
                        <li>activityShow </li>
                        <img src="../public/activityPicture.jpg" alt="该图片未加载成功"></img>
                    </div>*/}
                </div>
                <CommunityShow/>
                <BackToTop/>
                <FloatHelper/>
                <Footer/>

            </div>
        )
    }
}

export default Homepage