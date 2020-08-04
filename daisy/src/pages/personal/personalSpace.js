import React, { Component } from 'react'
import {Route, Link} from "react-router-dom";
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'
import {Layout,Menu} from 'antd'
import '../../style/personal/personalSpace.css'
import { personalRoutes } from '../../routes/index'

const { Header, Content,} = Layout;

export default class PersonalSpace extends Component {  
  render() {
    return (
      <Layout>
        <Header><HeaderNav/></Header>
        <Content className="perspace_content">
          <div><MastHead/></div>
          <Menu mode="horizontal">
          {
            personalRoutes.map((item,index)=>{
            return (<Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>)
            })
          }
          </Menu>
          <Content>
          {
            personalRoutes.map((item,index)=>{
              return (<Route key={index} path={item.path} component={item.component}/>)
            })
          }
          </Content>
        </Content>
      </Layout>
    )
  }
}
