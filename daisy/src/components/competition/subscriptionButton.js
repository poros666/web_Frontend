import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { PlusCircleTwoTone } from '@ant-design/icons'
import axios from 'axios'
import { isLogined } from '../../utils/auth'

export default class SubscriptionButton extends Component {

   
handleClick(id){
    /*if(!isLogined())
          {
            window.alert("未登录，确定后跳转至登陆界面")
            window.location.hash ='#/login'
            return 
         }
        else{*/
            var token=JSON.parse( localStorage.getItem('token')).token
            axios.post('/subscribe',{Account:JSON.parse(localStorage.getItem('userData')).account,ProjectId:parseInt(id)},
            {headers: { "Authorization": 'Bearer ' +token }})
            .then(response=>{
                console.log(response);
                window.alert("订阅成功")
              })
              .catch(error=>{
                console.log(error);
                console.log(error.response.status);
                if(error.response.status===409)
                {
                    window.alert("已经订阅过比赛")
                }
                else{
                window.alert("连接似乎出现问题")
                }
            });
        //}
}



    render() {
        return (
            <div>
               <Button type="primary" icon={<PlusCircleTwoTone />} onClick={()=>this.handleClick(this.props.compID)}>订阅</Button>
            </div>
        )
    }
}
