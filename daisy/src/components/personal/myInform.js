import React, { Component } from 'react'
import {Card,Row,Col} from 'antd'
import '../../style/personal/myItem.css'

export default class MyInform extends Component {
    render() {
        return (
            <div className="myitem">
                <p>
                    昵称
                    手机号 
                    邮箱 
                    密码
                    性别 
                    学号 
                    学校 
                    专业 
                    年级 
                    头像 
                    简介 
                    个性签名
                    qq号 
                    微信号 
                    微博链接
                </p>
            </div>
        )
    }
}
