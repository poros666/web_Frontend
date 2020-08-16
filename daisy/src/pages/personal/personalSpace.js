import React, { Component } from 'react'
import {Route, Link} from "react-router-dom";
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'
import {Layout,Divider} from 'antd'
import '../../style/personal/personalSpace.css'
import { personalRoutes } from '../../routes/index'
import OtherMenuItem from '../../components/personal/otherMenuItem'
import MyMenuItem from '../../components/personal/myMenuItem'

const { Header, Content,} = Layout;

export default class PersonalSpace extends Component {  
  constructor(props){
    super(props)
      this.state={
        role:1,       //role=1表示本人视角，role=0表示其他人视角
        
      }
  }
  
  render() {
    return (
      <div className='whole_page'>
        <HeaderNav/>
        <div id="perspace_content">
          <div id='mastHead'>
            <MastHead role={this.state.role}/>
          </div>
          <div id='menuItem'>
            {this.state.role?<MyMenuItem/>:<OtherMenuItem/>}
            <div>
            {
              personalRoutes.map((item,index)=>{
                return (<Route key={index} path={item.path} component={item.component}/>)
              })
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
