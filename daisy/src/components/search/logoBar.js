import React, { Component } from 'react'
import logo from '../../components/search/searchLogoBar.png'

export default class LogoBar extends Component {
    render() {

        return (
            <div className="logo" style={{marginLeft: '37%', marginTop: '5%'}}>
                    <img src={logo} width="362" height="135" alt="logo"/>
            </div>
        )
    }
}