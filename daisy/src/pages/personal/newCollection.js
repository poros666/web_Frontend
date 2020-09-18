import React, { Component } from 'react'
import {Form,Select,Descriptions,Divider,Avatar,Input,Upload, Card, Button} from 'antd'
import {UploadOutlined} from '@ant-design/icons'
import '../../style/personal/editInform.css'
import { getUserInfor, isLogined } from '../../utils/auth'
import Axios from 'axios'


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
        console.log(this.state)
    }
}
