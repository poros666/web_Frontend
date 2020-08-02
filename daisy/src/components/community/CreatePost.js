import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange,onChangeTitle, onSubmit, submitting, value,valuetitle }) => (
  <>
    <Form.Item>
      <TextArea name='T_title' rows={1} onChange={onChangeTitle} value={valuetitle}  style={{width: '100%', resize: 'none'}} placeholder="标题"/>
      <br/>
      <br/>
      <TextArea name='T_content' rows={8} onChange={onChange} value={value} style={{width: '100%', resize: 'none'}} placeholder="正文"/>
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default class CreatePost extends React.Component {


  

  state = {
    comments: [],
    submitting: false,
    value: '',
    valuetitle:''
  };

  handleSubmit = () => {
    

    if (this.state.value==='' || this.state.valuetitle==='') {
      return;
    }

    this.setState({
      submitting: true,
    });



    //这个是直接进行反馈的函数，到时候删掉 在发布帖子之后要刷新


    //在这里调用父组件的函数

    this.props.createPost(this.state.valuetitle,this.state.value)
    

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

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onChangeTitle={this.handleChangeTitle}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
              valuetitle={valuetitle}
            />
          }
        />
      </>
    );
  }
}

