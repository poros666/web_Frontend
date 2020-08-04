import React, { Component } from 'react'
import searchLogoBar from '../../components/search/searchLogoBar.png'

export default class LogoBar extends Component {
    render() {


        return (
            <div className="searchLogoBar" style={{ marginTop: '5%', marginBottom: '-3%'}}>
                    <img src={searchLogoBar} width="337" height="126" alt="logo"/>
            </div>
        )
    }
}