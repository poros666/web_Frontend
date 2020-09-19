import React, { Component } from 'react'
import {Select,Form,Button} from 'antd';
import axios from 'axios'
import {isLogined} from "../../utils/auth"

const { Option } = Select;
axios.defaults.baseURL='/api';
var starFolderName=''

const SelectOptionValue=(values)=>{
    starFolderName=values;
}
var token
if(isLogined()){
token=JSON.parse( localStorage.getItem('token')).token
}

export default class StarPost extends Component {

    constructor(props){
        super(props)
        this.state={
            userData:this.props.userdata,
            projctId:this.props.ProjctId,
            groupId:this.props.GroupId,
            postId:this.props.PostId,
            folderName:[]
        }
        console.log(this.state)
        axios.get('/FavouritePackage/'+this.state.userData.account,{headers: { "Authorization": 'Bearer ' +token }})
        .then(response=>{
            console.log(response.data)
            this.setState((state)=>{
                for(let i=0;i<state.folderName.length;i++){
                    state.folderName.pop();
                }
                for(let i=0;i<response.data.length;i++){
                    state.folderName.push(response.data[i].name);
                }    
                return{
                  folderName:state.folderName,
                }
             })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render() {
        if(!isLogined()){
            window.alert('连接出错，点击确定返回主页')
            window.location.hash ='#/home'
        }
        return(
            <div>
            <Form>
                <Form.Item name='selectStat' label='选择收藏夹'  rules={[{ required: true, message: '请选择收藏夹' }]}>
                <Select style={{width:250,margin:'0 20px',left:'20'}} onChange={SelectOptionValue}>
                {this.state.folderName.map(value=> (
                    <Option key={value} value={value}>
                       {value}
                    </Option>
                     ))}
                </Select>
                </Form.Item>
                <Form.Item>
                <Button shape="round" 
                    type="primary"
                    style={{ width: 200}}
                    onClick={()=>{
                        if(isLogined()){

                            if(this.state.userData.account!=null){
                                let dataSent={
                                  ProjectId:parseInt(this.state.projctId),
                                  Account:this.state.userData.account,
                                  Name:starFolderName,
                                  GroupId:parseInt(this.state.groupId),
                                  PostId:parseInt(this.state.postId)
                                }
                                console.log(dataSent)
                                axios.post('/PostStar',dataSent,{headers: { "Authorization": 'Bearer ' +token }})
                                .then(response=>{
                                  console.log(response)
                                  window.alert("收藏成功")
                                })
                                .catch(response=>{
                                    console.log(response)
                                    window.alert('您已经收藏了该帖子/动态')
                                })     
                        }
                        else{
                            window.alert("收藏失败")
                        }
                        }
                        else{
                            window.alert("未登录，确定后跳转至登陆界面")
                            window.location.hash ='#/login'
                        }
                    }}><p>收藏该帖</p></Button>
                    </Form.Item>
                    </Form>
                    </div>
        )
    }
}
