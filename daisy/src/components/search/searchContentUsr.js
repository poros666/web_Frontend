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
  constructor(props) {
    super(props)
    this.state = {
      kw: this.props.match.params.kw
    }
  }

onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
};

    render() {

        return (

          <Layout>
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