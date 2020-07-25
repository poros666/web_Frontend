import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import CommunityContent from './CommunityContent'

export default class Community extends Component {
    render() {
        return (
            <div>
                <HeaderNav/>
                <FloatHelper/>
                <CommunityContent/>
                <Footer/>
            </div>
        )
    }
}
