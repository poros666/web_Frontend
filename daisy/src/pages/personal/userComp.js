import React, { Component } from 'react'
import {Card,List} from 'antd'
import axios from 'axios'

export default class UserComp extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
    var token=JSON.parse( localStorage.getItem('token')).token

    axios
      .get('/Subscribe?Account='+this.props.account,{headers: { "Authorization": 'Bearer ' +token }})
      .then((res)=>{
        let tmpData=[]
        for(let i=0;i<res.data.length;i++){
          let tmpComp={
            ID:res.data[i].ProjectId,
            compName:res.data[i].Name
          }
          tmpData.push(tmpComp)
        }
        this.setState({
          data:tmpData
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
                          <a href={"#/compPage/"+item.ID+"=id"+item.ID}>
                            {item.compName}
                          </a>
                      </Card>
                  </List.Item>
                )}
                />
            </div>
        )
    }
}
