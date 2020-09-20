import React, { Component } from 'react'
import {Card,List,Drawer,Button} from 'antd'
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {isLogined} from "../../utils/auth"
import { CheckCircleTwoTone, NotificationOutlined } from '@ant-design/icons';

//import CONSTURL from '../../components/community/config';
import Axios from 'axios';
const { Option } = Select;
const data = [
    {
        account:"hhhh",
        nickname:"lalalalala",
        time:"2020-09-20"
    },
    {
        account:"hhhh",
        nickname:"lalalalala",
        time:"2020-09-20"
    },
    {
        account:"hhhh",
        nickname:"lalalalala",
        time:"2020-09-20"
    },
    {
        account:"hhhh",
        nickname:"lalalalala",
        time:"2020-09-20"
    }
]

export default class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {
          account:'',
          projectId:'',
          groupId:'',
          
          data:[],
          visible: false
        };
      }

      showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };
    /*
    componentDidMount(){
        if(isLogined()){
            var token = JSON.parse(localStorage.getItem('token')).token
            var tempAccount = JSON.parse(localStorage.userData).account;
            this.state.account = tempAccount;
            
            var json={
                "":,
                "":,
                "":,
                ""
            }
            

            Axios
            .get(`/Application/`+this.state.account,{
                headers: { Authorization: 'Bearer ' + token },
            })
            .then((res) => { 
                var result=res.data
                this.setState({data:result})
                console.log(res)
            })
        }
    }
    */

    render() {

        //初始化render数组状态
        //let objArr=this.state.data

        return (
            <div>
                <Card id='apply_card' bordered={false}>
                    <List 
                    itemLayout="vertical" 
                    //dataSource={objArr}
                    dataSource={data} 
                    renderItem={item => (
                        <List.Item>

                            <List.Item.Meta
                            //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={
                            <a href={"#/personal/account="+item.account}>{item.nickname}回复了你，快来看看吧！</a>
                            }
                            description={"原动态发于"+item.time}
                            style={{width:"50%"}}
                            />

                                <Button onClick={this.showDrawer}>
                                    审核
                                </Button>
                                <Drawer
                                    title="是否允许该用户加入小队？"
                                    placement='bottom'
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                >
                                    <Form layout="vertical" hideRequiredMark>
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[{ required: true, message: 'Please enter user name' }]}
                                        >
                                            <Input placeholder="Please enter user name" />
                                        </Form.Item>
                                    </Form>
                                    
                                </Drawer>                               


                        </List.Item>
                    )}
                    />
                </Card>
            </div>
        )
    }
}