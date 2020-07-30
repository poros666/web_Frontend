import React, { Component,BackTop } from 'react'
import ReactDOM from 'react-dom'
import {Layout,Row, Col, Divider,Menu, Breadcrumb} from 'antd'
import 'antd/dist/antd.css'
import BackToTop from '../components/comm/BackToTop'
import Footer from '../components/comm/Footer'
import HeaderNav from '../components/comm/HeaderNav'
import FloatHelper from '../components/comm/FloatHelper'
import ActComShow from './Homepage/ActComShow'
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
                <ActComShow/>
                <CommunityShow/>
                <BackToTop/>
                <FloatHelper/>
                <Footer/>
            </div>
        )
    }
}

export default Homepage