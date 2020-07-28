import React, { Component } from 'react'
import HeaderNav from '../components/comm/HeaderNav'
import TeamNav from '../components/findTeammate/TeamNav'
import ViewPost from '../components/findTeammate/ViewPost'
import TurnPage from '../components/findTeammate/TurnPage'
import PublishPost from '../components/findTeammate/PublishPost'
import Footer from '../components/comm/Footer'
import { Divider } from 'antd';

export default class FindTeam extends Component {
    render() {
        return (
            <>
                <div>
                <HeaderNav/>
                <TeamNav/>
                <Divider/>
                <div id='PostList'>
                    <ViewPost/>
                    <Divider/>
                    <ViewPost/>
                    <Divider/>
                    <ViewPost/>
                </div>
                <br/>
                <div id='TurnPage'><TurnPage/></div>
                <Divider/>
                <div id='PublishPost'><PublishPost/></div>
                <br/>
                <Footer/>
                </div>
            </>
        )
    }
}
