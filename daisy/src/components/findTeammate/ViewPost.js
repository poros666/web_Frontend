import React, { Component } from 'react'
import { Layout } from 'antd'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Router, Link } from 'react-router-dom';
import '../../style/findTeam/findTeam.css'

const {Sider, Content } = Layout;

export default class ViewPost extends Component {
    render() {
        return (
            <>
            <Layout>
                <Sider>
                    <div id='UserInfo'>
                    <br/>
                    <Avatar size={60} icon={<UserOutlined />} id='UserIcon'/>
                    <br/>
                    <br/>
                    <a id='UserName'>发帖人用户名</a>
                    <br/>
                    <br/>
                    </div>
                </Sider>
                <Layout>
                    <Content>
                        <br/>
                        <div id='Title'><Router><Link href='../../pages/Post.js'>帖子标题</Link></Router></div>
                        <br/>
                        <div id='Content'><p>帖子内容预览</p></div>
                    </Content>
                </Layout>
            </Layout>
            </>
        )
    }
}