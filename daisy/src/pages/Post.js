import HeaderNav from '../components/comm/HeaderNav'
import FloatHelper from '../components/comm/FloatHelper'
import TeamNav from '../components/findTeammate/TeamNav'
import Footer from '../components/comm/Footer'
import React, { Component } from 'react'
import { Layout } from 'antd';
import '../style/findTeam/findTeam.css'

const {Sider, Content } = Layout;

export default class Post extends Component {
    render() {
        return (
            <>
            <div>
                <HeaderNav/>
                <TeamNav/>
            </div>
            <br/>
            <div>
                <Layout>
                    <Sider>
                        <img alt='Error Picture'></img>
                        <a>发帖人信息</a>
                    </Sider>
                    <Layout>
                        <Content>
                            <h2>发帖标题</h2>
                            <p>发帖内容</p>
                        </Content>
                    </Layout>
                </Layout>
            </div>
            <div>

                <Footer/>
            </div>
            </>
        )
    }
}
