import React, { Component } from 'react'
import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import PublishPost from '../../components/findTeammate/PublishPost'
import Footer from '../../components/comm/Footer'
import { Divider } from 'antd';
import PostList from '../../components/findTeammate/ViewPost'
import '../../style/findTeam/findTeam.css'

export default class FindTeam extends Component {
    render() {
        return (
            <>
                <HeaderNav/>
                <TeamNav/>
                <Divider/>
                <div id='WebPage'>
                    <div id='PostList'>
                        <PostList/>
                    </div>
                    <br/>
                    <Divider/>
                    <div id='PublishPost'><PublishPost/></div>
                    <br/>
                    </div>
                <Footer/>
            </>
        )
    }
}
