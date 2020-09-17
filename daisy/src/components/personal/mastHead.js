import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Link} from "react-router-dom";
import axios from 'axios'

export default class MastHead extends Component {
    constructor(props){
        super(props)
        this.state={
            Icon:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            nickname:'同济大学今天放暑假了吗'
        }
        axios
            .get('')
            .then((res)=>{
                let tmpData=[]
                for(let i=0;i<res.data.length;i++){
                let tmp={
                    Icon:res.data[i].Icon,
                    nickname:res.data[i].Nickname
                }
                tmpData.push(tmp)
                }
                this.setState({
                //data:tmpData
                })
            })
            .catch(function(error){
                console.log(error)
            })
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