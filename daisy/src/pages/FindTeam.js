import HeaderNav from '../components/comm/HeaderNav'
import FloatHelper from '../components/comm/FloatHelper'
import TeamNav from '../components/findTeammate/TeamNav'
import TurnPage from '../components/findTeammate/TurnPage'
import PublishPost from '../components/findTeammate/PublishPost'
import ViewPost from '../components/findTeammate/ViewPost'
import Footer from '../components/comm/Footer'
import React, { Component } from 'react'
import '../style/findTeam/findTeam.css'

export default class FindTeam extends Component {
    render() {
        return (
            <div>
                <HeaderNav/>
                <TeamNav/>
                <br/>
                <ViewPost/>
                <br/>
                <div id='TurnPage'><TurnPage/></div>
                <br/>
                <PublishPost/>
                <Footer/>
            </div>
        )
    }
}

