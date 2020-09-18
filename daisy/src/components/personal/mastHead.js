import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Link} from "react-router-dom";
import axios from 'axios'

const data=JSON.parse(localStorage.getItem("userData"))

export default class MastHead extends Component {
    constructor(props){
        super(props)
        this.state={
            Icon:data.icon?'':data.icon,
            nickname:data.nickname
        }
    }
    
    render() {
        return (
            <div className="mastHead_card">
                <Card bordered={false} style={{textAlign:"center"}}>
                <Avatar 
                src={this.state.Icon}
                size='large'
                style={{marginBottom:20}}
                />
                <p>{this.state.nickname}</p>
                {this.props.role?<Link to='/editinform'><EditOutlined/></Link>:null}
            </Card>
            </div>
            
        )
    }
}