//需求：当用户在顶部导航栏输入一定内容
//      单击_放大镜_图标时跳转至本页面
//      或在搜索页面跳转至本页面
//      搜索结果将以_比赛_社区_用户_三个分区呈现
//      比赛分区排序方式_时间_评论数_订阅数
//      社区分区排序方式_时间_点赞数_评论数_收藏量
//      用户分区排序方式_注册时间_粉丝数量

//需求：当用户在顶部导航栏未输入任何内容
//      单击_放大镜_图标时跳转至本页面

import React, { Component } from 'react'
import EasySearchFrame from '../../components/search/easySearchFrame'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import SearchAssort from '../../components/search/searchAssort'
import LogoBar from '../../components/search/logoBar'

export default class SearchResult extends Component {
    constructor() {
        super();
        this.state = {
            resultWord:"",
        };
      };
    
    render() {
        return (
            <div >
                <HeaderNav/>
                
                <LogoBar/>

                <SearchAssort/>

                <Footer/>
            </div>
        )
    }
}