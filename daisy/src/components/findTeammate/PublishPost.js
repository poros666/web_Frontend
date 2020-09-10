import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { InputNumber } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { Row, Col} from 'antd';

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
  <>
    <Form.Item>
      <TextArea rows={1} onChange={onChange} value={value}  style={{width: '100%', resize: 'none'}} placeholder="标题"/>
      <br/>
      <br/>
      <TextArea rows={8} onChange={onChange} value={value} style={{width: '100%', resize: 'none'}} placeholder="正文"/>
    </Form.Item>
  </>
);

/*模拟已登录用户数据*/
const data={
    Uid:100,
    avatarSrc:'strange',
    Username:'帅哥学霸ykn',
    matchName:'睡觉摸鱼大赛'
  }


/*填写小队信息*/
const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  
  const getFields = () => {

    const children = [];//用于记录比赛信息

    children.push(
      <Col span={6} key={0}>
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
          <Input placeholder="输入小队名称" />
        </Form.Item>
      </Col>,
    );

    children.push(
      <Col span={6} key={1}>
        <Form.Item
          name={`从属比赛`}
          label={`从属比赛`}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder={data.matchName} disabled/>
        </Form.Item>
      </Col>,
    );

    children.push(
      <Col span={6} key={2}>
        <Form.Item
          name={`队长名称`}
          label={`队长名称`}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input placeholder={data.Username} disabled/>
        </Form.Item>
      </Col>,
    );

    children.push(
      <Col span={4} key={3}>
        <Form.Item
          name={`人数上限`}
          label={`人数上限`}
          rules={[
            {
              required: true,
              message: '该项为必填项',
            },
          ]}
        >
          <InputNumber min={1}/>
        </Form.Item>
      </Col>,
    );

    return children;
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            建立小队
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default class CreatePost extends React.Component {

    /*接收比赛名称*/
    constructor(props){
      super(props)
  
      var tempName=this.props.matchName

      this.state={
        comments: [],
        submitting: false,
        value: '',
        matchName:tempName
      }
  }


  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    /*这部分模拟信息发送，之后用后端api*/
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src={require("../../img/avatar/"+data.avatarSrc+".jpg")}
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
        <AdvancedSearchForm/>
      </>
    );
  }
}

