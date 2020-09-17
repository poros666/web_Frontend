import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import axios from 'axios'
import '../../utils/auth'
import { isLogined } from '../../utils/auth';


const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <Form
  name="basic">
    <Form.Item
     name='discusscontent'
     rules={[
       {
         required: true,
         message: '请输入内容！',
       },
     ]}>
      <br/>
      <TextArea onChange={onChange} value={value} 
                style={{width: '90%', resize: 'none'}}  allowClear={true} 
                autoSize={{ minRows: 6, maxRows: 10 }}  maxLength="1000"
                placeholder="在此输入讨论内容(1000字以内)"/>
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Raise Discuss
      </Button>
    </Form.Item>
  </Form>
);

export default class RaiseDiscuss extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    if(!isLogined()){
      window.alert("未登录，确定后跳转至登陆界面")
      window.location.hash ='#/login'
      return 
    }
    else{
      //this.postData()
    }
    
    this.setState({
      submitting: true,
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  
  postData(){
    var token=localStorage.getItem('token')
    var userData=localStorage.getItem('userData')
    var data={account:userData.account,projectId:this.props.compID,time:moment().format("YYYY-MM-DDTHH:mm:ssC"),
    content:this.state.value,picture:userData.icon}

    axios.post('http://fwdarling2020.cn:8080/api/Discussion',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { comments, submitting, value } = this.state;
    var userData=null
    if(isLogined())
    {
      userData=localStorage.getItem('userData')
    }

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src={userData ? 'data:image/png;base64,'+userData.icon:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
              alt={userData ? userData.nickName:''}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

