import React, { Component } from 'react'
import HeaderNav from '../../components/comm/HeaderNav'
import {Layout,Menu} from 'antd'
import {MailOutlined} from '@ant-design/icons'
import {Route, Link } from 'react-router-dom';
import { messageRoutes } from '../../routes/index'

const { Header, Content, Sider } = Layout;

export default class MessageIndex extends Component{
    render(){
        return(
          <Layout>
              <HeaderNav/>
              <div style={{height:'50px'}}/>
              <Layout>
                <Sider width={200} className="site-layout-background">
                  <Menu
                    mode="inline"
                    //defaultSelectedKeys={['1']}
                    //defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                  >
                    <p style={{textAlign:"center",fontSize:20,paddingTop:30}}><MailOutlined/>  消息中心</p>
                    {
                      messageRoutes.map((item,index)=>{
                        return (<Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>)
                      })
                    }
                    {/* 左侧导航栏菜单内容 */}
                  </Menu>
                </Sider>
                <Layout style={{ padding: '16px', height: '1500px' }}>              
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                    }}
                  >
                    {
                      messageRoutes.map((item,index)=>{
                        return (<Route key={index} path={item.path} component={item.component}/>)
                      })
                    }
                    {/* 对应每个组件的内容 */}
                  </Content>
                </Layout>
              </Layout>
            </Layout>
        )
    }
}