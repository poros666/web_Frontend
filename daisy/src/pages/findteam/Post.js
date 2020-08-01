import HeaderNav from '../../components/comm/HeaderNav'
import TeamNav from '../../components/findTeammate/TeamNav'
import Footer from '../../components/comm/Footer'
import React, { Component } from 'react'
import { Layout } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UserAddOutlined } from '@ant-design/icons';
import '../../style/findTeam/findTeam.css'
import { Divider } from 'antd';
import { Button } from 'antd'


const {Sider, Content } = Layout;

export default class Post extends Component {
    render() {
        return (
            <>
            <div>
                <HeaderNav/>
                <TeamNav/>
            </div>
            <Divider/>
            <div>
                <Layout  id='Post'>
                    <Sider>
                    <div id='UserInfo'>
                    <br/>
                    <br/>
                    <br/>
                    <Avatar size={56} icon={<UserOutlined />}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a id='UserName'>发帖人用户名</a>
                    <Divider/>
                    <Button type="primary" shape="round" icon={<UserAddOutlined />} size={60} id='Apply'>
                        申请加入小队
                    </Button>
                    </div>
                    </Sider>
                    <Layout>
                        <Content>
                            <h2>发帖标题</h2>
                            <Divider/>
                            <p>知道很丑反正还会改</p>
                        </Content>
                    </Layout>
                </Layout>
            </div>
            <Divider/>
            <div>
                <Footer/>
            </div>
            </>
        )
    }
}
