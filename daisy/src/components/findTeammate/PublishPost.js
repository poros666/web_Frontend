import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, Input } from 'antd';
import { InputNumber } from 'antd';
import moment from 'moment';
import { Row, Col} from 'antd';
import axios from 'axios'
import {isLogined} from "../../utils/auth"

const { TextArea } = Input;
axios.defaults.baseURL='/api';
var userdata=JSON.parse(localStorage.getItem('userData'));


/*模拟已登录用户数据*/
const data={
    Account:'111111',
    UserName:'帅哥学霸ykn',
    Icon:'strange'
  }

  const Editor = ({onChange}) => (
    <>
      <Form.Item>
        <TextArea rows={10} onChange={onChange} style={{width: '90%', resize: 'none'}} placeholder="帖子内容"/>
      </Form.Item>
    </>
  );

export default class CreatePost extends React.Component {


    constructor(props){
      super(props)
  
      let tempId=this.props.matchId

      this.state={
        ProjctId:parseInt(tempId),
        Content:'',
        matchName:'',
        matchMaxMemberNum:0,
        Name:'',
        Icon:''
      }

      console.log(userdata);

      axios.get('/Project/'+tempId)
      .then(response=>{
        console.log(response)
      this.setState({
        matchName:response.data.name,
        matchMaxMemberNum:response.data.participantsNumber
      })
    })
    .catch(error=>{
      this.setState({
        matchName:'未找到该比赛',
        matchIntroduction:'未找到该比赛'
      })
      console.log(error);
    })

    if(isLogined()){
      axios.get(userdata.icon)
      .then(res=>{
          this.setState({
              Icon:res.data
          })
      })
    }
  }

  TeamNameChange=e=>{
    this.setState({
      Name:e.target.value
    })
  }

  
  ContentChange = e => {
    this.setState({
      Content:e.target.value
    })
  };

  getFields=()=>{
    const children = [];//用于记录比赛信息

    children.push(
      <Col span={10} key={0}>
        <Form.Item
          name={`小队名称`}
          label={`小队名称`}
          rules={[
            {
              required: true,
              message: '该项为必填项',
            },
          ]}
        >
          <Input placeholder="输入小队名称" onChange={this.TeamNameChange}/>
        </Form.Item>
      </Col>,
    );

    
    children.push(
      <Col span={7} key={1}>
        <Form.Item
          name={`队长名称`}
          label={`队长名称`}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder={isLogined()?userdata.name:'请先登录'} disabled/>
        </Form.Item>
      </Col>,
    );

    children.push(
      <Col span={6} key={2}>
        <Form.Item
          name={`从属比赛`}
          label={`从属比赛`}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <InputNumber placeholder={this.state.matchName} disabled/>
        </Form.Item>
      </Col>,
    );
    children.push(
      <Col span={21} key={3}>
      <Form.Item
      name={`帖子内容`}
      label={`帖子内容`}
      rules={[
        {
          required: true,
          message: '该项为必填项',
        },
      ]}
      >
      <Editor onChange={this.ContentChange}/>
    </Form.Item>
    </Col>
    )
    children.push(
      <Col span={14} key={4}>
      <Button shape="round" type="primary" htmlType="submit" onClick={()=>{
        if(isLogined()){
          var token=JSON.parse( localStorage.getItem('token')).token
          if(this.state.Name.length>0&&this.state.Content.length>0){
          let dataSent={
            ProjectId:this.state.ProjctId,
            leaderAccount:userdata.account,
            postTime:moment().format("YYYY-MM-DDTHH:mm:ssC"),
            content:this.state.Content,
            maxMemberNum:this.state.matchMaxMemberNum,
            name:this.state.Name
          }
          console.log(dataSent);
          axios.post('/Post',dataSent,{headers: { "Authorization": 'Bearer ' +token }})
          .then(response=>{
            console.log(response)
            window.alert("发布成功")
          })
        }
      }
      else{
        window.alert("未登录，确定后跳转至登陆界面")
        window.location.hash ='#/login'
      }
      }}>建立小队</Button>
      </Col>
    )
    return children;
  }

  render() {
    return (
      <>
        <Comment 
          avatar={
            <Avatar style={{
              margin: '0 10px 0 50px',
              }}
              src={isLogined()?this.state.Icon:''}
            />
          }
          content={
            <Form
            name="advanced_search"
            className="ant-advanced-search-form"
            id='PublishPost'
            >
            <Row gutter={24}>{this.getFields()}</Row>
        </Form>
          }
        />
      </>
    );
  }
}



