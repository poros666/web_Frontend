import React, { Component } from 'react'
import {Card,Button,Modal,Form,Input,Select,Popconfirm,Popover,List} from 'antd'
import {LockOutlined,LockFilled,DeleteOutlined,PlusCircleOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Axios from 'axios'


const {Meta}=Card

export default class UserColle extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            account:this.props.match.params.account
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get('/FavouritePackage/'+this.state.account,{headers: { "Authorization": 'Bearer ' +token }})
        .then((res)=>{
            this.setState(
                {
                    data:res.data
                }
            )
        })
        .catch(function(error){
            console.log(error)
         })
    }
    changePrivacy(file){
        var content={
            Account:this.state.account,
            Name:file.name,
            Privacy:file.privacy
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.put('/FavouritePackage',content,{headers: { "Authorization": 'Bearer ' +token }})
    }

    
    
    render() {
        return (
            <div>
                <Link to={'/newColle/account='+this.state.account}>
                    <Button
                    type="text" 
                    size='large'
                    icon={<PlusCircleOutlined/>}
                    style={{margin:20}}
                    >
                        新建收藏夹
                    </Button>
                </Link>
                

                <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                        actions={[/*
                                <Popover content='更改收藏夹隐私状态'>
                                    <Button 
                                    type="text" 
                                    size='small'
                                    icon={item.privacy?<LockFilled style={{color:'#1890ff'}}/>:<LockOutlined style={{color:'#1890ff'}}/>}
                                    onClick={()=>this.changePrivacy(item)}
                                    />
                                </Popover>,*/
                        ]}
                        >
                            <Meta
                            title={<a href={"#/"+item.type+"Collection/account="+this.state.account+"/fileName="+item.name+"/fileType="+item.type}>{item.name}</a>}
                            description={item.type+' file'}
                            />
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        )
    }
}
