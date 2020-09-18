import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { PlusCircleTwoTone } from '@ant-design/icons'
import axios from 'axios'
import { isLogined } from '../../utils/auth'

export default class SubscriptionButton extends Component {


    postData(){
        axios.post('/subscribe',{account:localStorage.getItem('userData').account,projectId:this.propos.compID})
        .then(response=>{
            console.log(response);
            window.alter("订阅成功")
          })
          .catch(error=>{
            console.log(error);
            window.alert("连接似乎出现问题")
          });
        
    }


handleClick(){
    /*if(!isLogined())
          {
            window.alert("未登录，确定后跳转至登陆界面")
            window.location.hash ='#/login'
            return 
         }
        else{*/
            axios.post('/subscribe',{account:localStorage.getItem('userData').account,projectId:this.propos.compID})
            .then(response=>{
                console.log(response);
                window.alter("订阅成功")
              })
              .catch(error=>{
                console.log(error);
                window.alert("连接似乎出现问题")
              });
        //}
}



    render() {
        return (
            <div>
               <Button type="primary" icon={<PlusCircleTwoTone />} onClick={this.handleClick}>订阅</Button>
            </div>
        )
    }
}
