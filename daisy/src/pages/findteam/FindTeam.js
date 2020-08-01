import React, { Component } from 'react'
import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import PublishPost from '../../components/findTeammate/PublishPost'
import Footer from '../../components/comm/Footer'
import { Divider } from 'antd';
import PostList from '../../components/findTeammate/ViewPost'

export default class FindTeam extends Component {
    render() {
        return (
            <>
                <div>
                <HeaderNav/>
                <TeamNav/>
                <Divider/>
                <div id='PostList'>
                    <PostList/>
                </div>
                <br/>
                <Divider/>
                <div id='PublishPost'><PublishPost/></div>
                <br/>
                <Footer/>
                </div>
            </>
        )
    }
}
