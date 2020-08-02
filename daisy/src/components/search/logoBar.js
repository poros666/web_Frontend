import React, { Component } from 'react'
import logo from '../../pages/admin/xiaohua.png'

export default class LogoBar extends Component {
    render() {


        return (
            <div className="logo" style={{margin: '5%'}}>
                    <img src={logo} width="180" height="132" alt="logo"/>
            </div>
        )
    }
}