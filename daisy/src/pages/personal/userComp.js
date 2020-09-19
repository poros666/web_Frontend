import React, { Component } from 'react'
import {Card,List} from 'antd'
import axios from 'axios'

export default class UserComp extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      account:this.props.match.params.account
    }
    var token=JSON.parse( localStorage.getItem('token')).token

    axios
      .get('/Subscribe?Account='+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
      .then((res)=>{
        this.setState({
          data:res.data
        })
      })
      .catch(function(error){
        console.log(error)
      })
  }
    render() {
        return (
            <div>
              <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                  <List.Item>
                      <Card>
                          <a href={"#/compPage/id="+item.projectId+'/'}>
                            {item.name}
                          </a>
                      </Card>
                  </List.Item>
                )}
                />
            </div>
        )
    }
}
