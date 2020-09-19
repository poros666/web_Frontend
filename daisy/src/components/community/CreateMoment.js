//
// made by ykn
//
import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { isLogined } from '../../utils/auth';
import Unlogined from './Unlogined'
import CONSTURL from './config';
import Axios from 'axios'
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);




const Editor = ({ onChange,onChangeTitle, onSubmit, value,valuetitle }) => (
  <Form
    name="basic"
  >

    <Form.Item
      name='title'
       rules={[
        {
          required: true,
          message: '请输入标题!',
        },
      ]}
    >
      <TextArea name='T_title' rows={1} onChange={onChangeTitle} value={valuetitle}  style={{width: '100%', resize: 'none'}} placeholder="标题"/>
    </Form.Item>

    <Form.Item
      name='content'
      rules={[
        {
          required: true,
          message: '请输入正文！',
        },
      ]}
    >
    <TextArea name='T_content' rows={8} onChange={onChange} value={value} style={{width: '100%', resize: 'none'}} placeholder="正文"/>
    </Form.Item>

    <Form.Item>
      <Button htmlType="submit" onClick={onSubmit} type="primary">
        创建动态
      </Button>
    </Form.Item>

  </Form>
);

export default class CreateMoment extends React.Component {
  constructor(props){
    super(props)

    //获取登陆账号的内容
      var  tempAlt='我是石头皇帝'
      var  tempSrc='strange'
   

    this.state={
      comments: [],
      submitting: false,
      value: '',
      valuetitle:'',
      avatarSrc:tempSrc,
      avatarAlt:tempAlt,
      ava:CONSTURL.UserAva1
    }
  }

  componentDidMount(){
    if(isLogined()){
      Axios.get(JSON.parse(localStorage.userData).icon.toString()).then((res)=>{
        this.setState({ava:res.data})
      })
    }
  }



  handleSubmit = () => {
    

    if (this.state.value==='' || this.state.valuetitle==='') {

      

      return;
    }

    this.setState({
      submitting: true,
    });



    //这个是直接进行反馈的函数，到时候删掉 在发布帖子之后要刷新


    //在这里调用父组件的函数



    this.props.createMoment(this.state.valuetitle,this.state.value)
    
    this.setState({
      submitting: false,
    });

    

  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleChangeTitle = e => {
    this.setState({
      valuetitle:e.target.value
    });
  };

  render() {
    const { comments, submitting, value,valuetitle } = this.state;
    var islog=isLogined()
    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <a href={"#/personal"}>
            {/* <a href={"#/personal/account="+JSON.parse(localStorage.userData).account.toString()}> */}
            {/*      {islog?<Avatar src={localStorage.getItem('userData').Icon}/>:<Unlogined/>} */}
            {islog?<Avatar src={this.state.ava}/>:<Unlogined/>}
            </a>
          }
          content={
            <Editor
              onChange={this.handleChange}
              onChangeTitle={this.handleChangeTitle}
              onSubmit={this.handleSubmit}
              value={value}
              valuetitle={valuetitle}
            />
          }
        />
      </>
    );
  }
}

