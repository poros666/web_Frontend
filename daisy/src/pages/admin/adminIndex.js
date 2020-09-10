//@author poros666 2020/7/25

import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import '../../style/admin/admin.css'
import logo from './xiaohua.png'
import {Route, Link } from 'react-router-dom';
import { adminRoutes } from '../../routes/index'
const { Header, Content, Sider } = Layout;

export default class AdminIndex extends Component {
    render() {
        return (
            <Layout>
              <Header className="header" style={{background:'#99cccc',height:"7%"}}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1 style={{color:"black"}}>DAISY 后台</h1>
                </div>
              </Header>
              <Layout>
                <Sider width={200} className="site-layout-background">
                  <Menu
                    mode="inline"
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    {
                      adminRoutes.map((item,index)=>{
                        return (<Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>)
                      })
                    }
                    {/* <Menu.Item key="1"><Link to="/admin/comp">比赛管理</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/admin/dealreport">处理举报</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/admin/usermanagement">用户管理</Link></Menu.Item> */}
                  </Menu>
                </Sider>
                <Layout style={{ padding: '16px' }}>              
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                    }}
                  >
                    {
                      adminRoutes.map((item,index)=>{
                        return (<Route key={index} path={item.path} component={item.component}/>)
                      })
                    }
                    {/* <Route path="/admin/comp" component={CompManagement}/> */}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
        )
    }
}
