import React, { Component } from 'react'
import {Card,List,Drawer,Button, Alert} from 'antd'
import { Form, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {isLogined} from "../../utils/auth"
import { CheckCircleTwoTone, NotificationOutlined } from '@ant-design/icons';

//import CONSTURL from '../../components/community/config';
import Axios from 'axios';
const { Option } = Select;

const onAlertClose = (e) => {
    console.log(e, 'I was closed.');
    window.location.reload()
  };

export default class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {
          account:'',
          data:[],
          visible: false,
          flag: "",
          choice: ""
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

      handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({ 
            flag: value
          });
      };
      
      putData(value1, value2) {
        var data = {
            projectId: value1,
            account: this.state.account,
            groupId: value2,
            result: this.state.choice,

        }
       console.log("data:",data)
        var token = JSON.parse(localStorage.getItem('token')).token
        Axios
        .put(`/Application`, data, {
          headers: { Authorization: 'Bearer ' + token },
        })
        .then((res) => {
          console.log(res)
        })
        .catch(erro=>{
            console.log(erro)
        })
      }

      handleClick(valueProjectId, valueGroupId) {
          if(this.state.flag==true){
            this.setState({ 
                choice: "successful"
            });               
          }
          else if(this.state.flag==false){
            this.setState({ 
                choice: "failed"
            }); 
          }
        this.putData(valueProjectId, valueGroupId);
        this.onClose();
        this.render=()=>{
            return(

                <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                closable
                showIcon
                onClose={onAlertClose}
                />   

            )
        }
      }

    componentDidMount(){
        if(isLogined()){
            var token = JSON.parse(localStorage.getItem('token')).token
            var tempAccount = JSON.parse(localStorage.userData).account;
            this.state.account = tempAccount;

            Axios
            .get(`/Application/`+this.state.account,{
                headers: { Authorization: 'Bearer ' + token },
            })
            .then((res) => { 
                var result=res.data
                this.setState({data:result})
                //console.log(res)
            })
        }
    }
    

    render() {

        //初始化render数组状态
        let objArr=this.state.data

        return (
            <div>
                <List 
                itemLayout="vertical" 
                dataSource={objArr}
                renderItem={item => (
                    <List.Item>
                        <Row>
                            <Col span={18}>
                                <List.Item.Meta
                                    //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={
                                    <a href={"#/personal/account="+item.account}>{item.account}申请加入你的小队！</a>
                                    }
                                    description={"小队名称："+item.name}
                                    style={{width:"50%"}}
                                />                            
                            </Col>

                            <Col span={6}>
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
                                        <Form.Item>
                                                <Select defaultValue="approve" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                                                    <Option value="approve">同意</Option>
                                                    <Option value="refuse">拒绝</Option>
                                                </Select>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" onClick={()=>{this.handleClick(item.projectId, item.groupId)}}>
                                            Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Drawer>  
                            </Col>
                        </Row>
                        
                        <Row>
                            {"申请理由："+item.content}                            
                        </Row>
                                
                    </List.Item>
                )}
                />
            </div>
        )
    }
}