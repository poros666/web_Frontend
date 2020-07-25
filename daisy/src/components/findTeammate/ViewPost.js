import React, { Component } from 'react'
import { Layout } from 'antd'
import '../../style/findTeam/findTeam.css'

const {Sider, Content } = Layout;

export default class ViewPost extends Component {
    render() {
        return (
            <>
            <Layout>
                <Sider><img alt='Error Page'/></Sider>
                <Layout>
                    <Content>
                        <div id='Title'><a>帖子标题</a></div>
                        <div id='Content'><p>帖子内容预览</p></div>
                    </Content>
                </Layout>
            </Layout>
            </>
        )
    }
}