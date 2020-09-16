import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { PlusCircleTwoTone } from '@ant-design/icons'
import axios from 'axios'
import { isLogined } from '../../utils/auth'

export default class SubscriptionButton extends Component {

/*
    postData(){
        axios.post('/api/subscribe',{account:,projectId:this.propos.compID})
        .then(function (response) {
            console.log(response);
            window.alter("订阅成功")
          })
          .catch(function (error) {
            console.log(error);
            window.alter("连接似乎出现问题")
          });
        
    }
*/

handleClick(){
    if(!isLogined())
          {
            window.alert("未登录，确定后跳转至登陆界面")
            window.location.hash ='#/login'
            return 
         }
        else{
            //postData()
        }
}



    render() {
        return (
            <div>
               <Button type="primary" icon={<PlusCircleTwoTone />} onClick={this.handleClick}>订阅</Button>
            </div>
        )
    }
}
