//需求：当用户在顶部导航栏未输入任何内容
//      单击_放大镜_图标时跳转至本页面

import React, { Component } from 'react'
import SearchFrame from '../../components/search/searchFrame'
import HotSearch from '../../components/search/hotSearch'
import LogoBar from '../../components/search/logoBar'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'

export default class SearchPage extends Component {
    render() {
        return (
            <div >
                <HeaderNav/>

                <LogoBar/>

                <SearchFrame/>

                <HotSearch/>

                <Footer/>
            </div>
        )
    }
}