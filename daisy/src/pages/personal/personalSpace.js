import React, { Component } from 'react'
import {Route} from "react-router-dom";
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'
import {Layout} from 'antd'
import '../../style/personal/personalSpace.css'
import { personalRoutes } from '../../routes/index'
import OtherMenuItem from '../../components/personal/otherMenuItem'
import MyMenuItem from '../../components/personal/myMenuItem'

const { Content,} = Layout;

export default class PersonalSpace extends Component {  
  render() {
    {/*role=true是用户本人的视角 role=false是其他人的视角 */}
    const role=true

    return (
      <div>
        <div><HeaderNav/></div>
        <Layout>
          <Content className="perspace_content">
            <div><MastHead/></div>
            {/*选择渲染不同的menu组件*/}
            {role?<MyMenuItem/>:<OtherMenuItem/>}
            
            <Content>
            {
              personalRoutes.map((item,index)=>{
                return (<Route key={index} path={item.path} component={item.component}/>)
              })
            }
            </Content>
          </Content>
        </Layout>
        
      </div>
      
    )
  }
}
