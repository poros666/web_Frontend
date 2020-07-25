import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import ReadPostContent from './ReadPostContent'

export default class ReadPost extends Component {
    render() {
        return (
            <div>
                <HeaderNav/>
                <FloatHelper/>
                <ReadPostContent/>
                <Footer/>
            </div>
        )
    }
}
