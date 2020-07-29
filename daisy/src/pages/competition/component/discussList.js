import React, { Component } from 'react'
import { List, Avatar ,Space,Button} from 'antd';
import 'antd/dist/antd.css';

const data = [
    {
      username: 'zhangsan',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      username: 'lisi',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'kuanye',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'maoge',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
    {
      username: 'zhangsan',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      username: 'lisi',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'kuanye',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'maoge',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
    {
      username: 'zhangsan',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      username: 'lisi',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'kuanye',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'maoge',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
    {
      username: 'zhangsan',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      username: 'lisi',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'kuanye',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'maoge',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
    {
      username: 'zhangsan',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      username: 'lisi',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'kuanye',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      username: 'maoge',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
  ];


export default class DiscussList extends Component {
    render() {
        return (
            <div>
                <SortDiscuss/>
                <br/>
                <br/>
                    <List
                        style={{width: '100%', resize: 'none'}}
                        itemLayout="horizontal"
                        pagination={{
                          onChange: page => {
                            console.log(page);
                          },
                          pageSize: 10,position:"bottom"
                        }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.username}</a>}
                                description={<p>{item.description}</p>}
                            />
                        </List.Item>
                        )}
                    />
            </div>
        )
    }
}


function SortDiscuss() {
    return (
      <Space>
          <p>sort by:</p>       
        <Button type="primary">time</Button>
        <Button type="primary">like</Button>
        <Button type="primary">Favorites</Button>     
      </Space>
    );
  }
