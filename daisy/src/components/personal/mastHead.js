import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Link} from "react-router-dom";
import Axios from 'axios';

const data=JSON.parse(localStorage.getItem("userData"))

export default class MastHead extends Component {
    constructor(props){
        super(props)
        this.state={
            account:this.props.account,
            nickname:data.nickname,
            role:this.props.role,
            image:null,
        }
    }

    componentDidMount()
    {
      this.getimage()
    }
  
    getimage()
    {
      if(this.state.role)
      {
        Axios.get(data.icon)
        .then(res=>{
          this.setState({image:res.data})
        })
      }
      else
      {
          Axios.get('/User/'+this.state.account)
          .then(respons=>{
              var pictureurl=respons.data.icon
              Axios.get(pictureurl)
              .then(res=>{
                  this.setState({image:res.data})
                }
              )
          })
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