import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Link} from "react-router-dom";
import Axios from 'axios';
import { isLogined } from '../../utils/auth';

const data=JSON.parse(localStorage.getItem("userData"))

export default class MastHead extends Component {
    constructor(props){
        super(props)
        this.state={
            account:this.props.account,
            nickname:null,
            role:this.props.role,
            image:null,
        }
        if(isLogined()){
        var token=JSON.parse( localStorage.getItem('token')).token
          Axios.get('/Users/'+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
          .then(respons=>{
              var pictureurl=respons.data.icon
            Axios.get(pictureurl)
              .then(res=>{
                Axios.get(res.data).then(re=>{
                  this.setState({
                    image:re.data,
                    nickname:respons.data.nickname
                  })}
                  )
                }
              )
          })}
          else
          {
            window.alert("请登录查看他人信息")
            window.location.hash="#/home"
          }
      }
    



    
    render() {
        return (
            <div className="mastHead_card">
                <Card bordered={false} style={{textAlign:"center"}}>
                <Avatar 
                src={this.state.image}
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