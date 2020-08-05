import React, { Component } from 'react'
import logo from '../../components/search/searchLogoBar.png'

export default class LogoBar extends Component {
    render() {


        return (
            <div className="logo" style={{marginLeft: '35%', marginBottom: '2%'}}>
                    <img src={logo} width="337" height="126" alt="logo"/>
            </div>
        )
    }
}