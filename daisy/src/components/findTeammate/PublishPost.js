import { Comment, Avatar, Form, Button, Input } from 'antd';
import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// const CommentList = ({ comments }) => (
//   <List
//     dataSource={comments}
//     header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//     itemLayout="horizontal"
//     renderItem={props => <Comment {...props} />}
//   />
// );

const Editor = () => (
  <>
    <Form.Item>
      <TextArea rows={1} placeholder='帖子标题'/>
    </Form.Item>
    <Form.Item>
      <TextArea rows={4} placeholder='帖子内容'/>
    </Form.Item>
    <Form.Item>
      <Button>
        发布帖子
      </Button>
    </Form.Item>
  </>
);

export default class publishPost extends Component {
    render() {
        return (
            <>
            <Comment
              author={<p id='UserName'>UserName</p>}
              avatar={
                <Avatar size={56}
                  icon={<UserOutlined />} 
                  alt="Han Solo"
                />
              }
              content={
                <Editor/>
              }
            />
          </>
        )
    }
}