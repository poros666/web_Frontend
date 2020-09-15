import React from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, Input } from 'antd';
import { InputNumber } from 'antd';
import moment from 'moment';
import { Row, Col} from 'antd';
import axios from 'axios'

const { TextArea } = Input;

/*模拟已登录用户数据*/
const data={
    Account:'111111',
    UserName:'帅哥学霸ykn',
    Icon:'strange'
  }

  const Editor = ({onChange}) => (
    <>
      <Form.Item>
        <TextArea rows={10} onChange={onChange} style={{width: '100%', resize: 'none'}} placeholder="帖子内容"/>
      </Form.Item>
    </>
  );

export default class CreatePost extends React.Component {

    constructor(props){
      super(props)
  
      let tempId=this.props.matchId

      this.state={
        ProjctId:tempId,
        Content:'',
        matchName:'',
        matchMaxMemberNum:0,
        Name:''
      }

      axios.get('http://mock-api.com/5g7AeqKe.mock/matchInfo/'+tempId)
      .then(response=>{
      this.setState({
        matchName:response.data[0].Name,
        matchMaxMemberNum:response.data[0].MaxMemberNum
      })
    })
    .catch(error=>{
      this.setState({
        matchName:'未找到该比赛',
        matchIntroduction:'未找到该比赛'
      })
      console.log(error);
    })
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
          <Input placeholder={data.UserName} disabled/>
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
      <Form.Item>
      <Editor onChange={this.ContentChange}/>
    </Form.Item>
    </Col>
    )
    children.push(
      <Col span={24} key={4}>
      <Button type="primary" htmlType="submit" onClick={()=>{
        if(this.state.Name.length>0&&this.state.Content.length>0){
        let dataSent={
          ProjctId:this.state.ProjctId,
          LeaderAccount:data.Account,
          PostTime:moment().format("YYYY-MM-DD HH:mm:ss"),
          Content:this.state.Content,
          MaxMemberNum:this.state.matchMaxMemberNum,
          Name:this.state.Name
        }
        axios.post('http://mock-api.com/5g7AeqKe.mock/Post',dataSent)
        .then(response=>{
          console.log(response)
        })
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
              src={require("../../img/avatar/"+data.Icon+".jpg")}
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



