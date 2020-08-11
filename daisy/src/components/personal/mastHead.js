import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {UserOutlined,EditOutlined} from '@ant-design/icons'
import { Link} from "react-router-dom";

export default class MastHead extends Component {
    constructor(props){
        super(props)
        this.state={
            nickname:'同济大学今天放暑假了吗',
            slogan:'是个疯子'
        }
    }
    
    render() {
        
        return (
            <div className="mastHead_card">
                <Card bordered={false} style={{textAlign:"center"}}>
                <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined />}/>
                <p>{this.state.nickname}</p>
                <p>{this.state.slogan}</p>
                {this.props.role?<Link to='/editinform'><EditOutlined/></Link>:null}
            </Card>
            </div>
            
        )
    }
}