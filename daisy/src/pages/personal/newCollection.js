import React, { Component } from 'react'
import {Form,Select,Descriptions,Divider,Avatar,Input,Upload, Card, Button} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
import '../../style/personal/editInform.css'
import Axios from 'axios'
import moment from 'moment'


const {Option}=Select


export default class NewCollection extends Component {
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.postChange.bind(this)
        this.priChange.bind(this)
        this.createFile.bind(this)
        this.state={
            fileName:'',
            private:'private',
            account:this.props.match.params.account,
            type:'post'
        }
    }

    render() {
        return (
            <div id='newColle_page'>
                <div id='content'>
                    <Card id='colle_card' title='新建收藏夹'>
                        <Form>
                            <Form.Item label='收藏夹名称'>
                                <Input value={this.state.fileName} name='fileName' onChange={this.inputChange}/>
                            </Form.Item>
                            <Form.Item label='收藏夹类型'>
                                <Select defaultValue='post' style={{ width: 120 }} onChange={this.postChange.bind(this)}>
                                    <Option value='post'>帖子收藏夹</Option>
                                    <Option value='moment'>动态收藏夹</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label='隐私状态'>
                            <Select defaultValue='private' style={{ width: 120 }} onChange={this.priChange.bind(this)}>
                                <Option value='private'>仅自己可见</Option>
                                <Option value='public'>公开</Option>
                            </Select>
                            </Form.Item>
                        </Form>
                        <div className='saveButtons'>
                            <Button 
                            type='primary'
                            onClick={this.createFile.bind(this)}
                            >
                                保存
                            </Button>
                            <a href='#/personal/colle'>
                                <Button>取消</Button>
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
    postChange(value) {
        if(value=='moment'){
            this.setState({
                type:'moment'
           })
        }
    }
    priChange(value) {
        if(value=='public'){
            this.setState({
                private:'public'
           })
        }
    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
    createFile(){
        var token=JSON.parse( localStorage.getItem('token')).token
        var content={Account:this.state.account,CreateTime:moment().format("YYYY-MM-DDThh:mm:ssC"),Name:this.state.fileName,Privacy:this.state.private,Type:this.state.type}
        Axios.post('/FavouritePackage',content,{headers: { "Authorization": 'Bearer ' +token }})
        .catch(error=>{
            console.log(error);
            console.log(error.response.status);
            if(error.response.status===409)
            {
                window.alert("已有同名收藏夹，创建失败")
            }
            else{
            window.alert("连接似乎出现问题,创建失败")
            }
        })
        window.location.hash="#/personal/account="+this.state.account
    }
}
