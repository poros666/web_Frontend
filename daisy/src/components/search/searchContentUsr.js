import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import { Form, Radio, Layout } from 'antd';
import { FireOutlined, LikeOutlined, FieldTimeOutlined, CommentOutlined, BellOutlined } from '@ant-design/icons';


const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default class SearchContentUsr extends Component {

  state = {
    value: 1,
  };

onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
};

    render() {

        return (

          <Layout>
          <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{ marginBottom: 16, marginLeft: 20 }}
        >
            <Form.Item label="">
            <Radio.Group
                onChange={this.onChange} value={this.state.value}
            >
            <Radio value={1}><FieldTimeOutlined/>最新注册</Radio>
            <Radio value={2}><BellOutlined/>最多订阅</Radio>
            </Radio.Group>
            </Form.Item>
        </Form>

            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />            
          </Layout>

        );
    }
}