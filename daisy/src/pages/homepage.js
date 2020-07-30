import React, { Component,BackTop } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import Footer from '../components/comm/Footer'
import HeaderNav from '../components/comm/HeaderNav'
import FloatHelper from '../components/comm/FloatHelper'
import ActComShow from './Homepage/ActComShow'
import CommunityShow from'./Homepage/CommunityShow'
import '../style/homepage.css'

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
                <FloatHelper/>
                <Footer/>
            </div>
        )
    }
}

export default Homepage