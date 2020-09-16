import React, { Component,BackTop } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import Footer from '../components/comm/Footer'
import HeaderNav from '../components/comm/HeaderNav'
import FloatHelper from '../components/comm/FloatHelper'
import TopBar from './Homepage/TopBar'
import CompShow from './Homepage/CompShow'

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
            <div style={{height:'100%'}}>
                <HeaderNav/>
                <FloatHelper/>
                <TopBar/>
                <CompShow/>
                <Footer/>
            </div>
        )
    }
}

export default Homepage
