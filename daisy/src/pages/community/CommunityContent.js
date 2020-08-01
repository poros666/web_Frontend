import React, { Component } from 'react'
import CreatePost from '../../components/community/CreatePost'
import { List, Avatar ,Space,Button} from 'antd';
import 'antd/dist/antd.css';



//再这里绑定元数据
const data = [
    {
      title: 'Ant Design Title 1',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Ant Design Title 2',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      title: 'Ant Design Title 3',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      title: 'Ant Design Title 4',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
  ];


export default class CommunityContent extends Component {
    render() {
        //每个组件之间都要留有一定的空间，Post要做成很多个
        //之后有一个翻页的组件直接用别人的，或者不用也可以
        return (
            <div style={{padding:'0 50px'}}>
                <SortPost/>
                <br/>
                <br/>

                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={<p>{item.description}</p>}
                            />
                        </List.Item>
                        )}
                    />

                {
                    //这里也会加一个翻页，用别人的组件
                }                
                <CreatePost/>
            </div>
        )
    }
}



function SortPost() {
    return (
      <Space>
          <p>sort by:</p>       
        <Button type="primary">time</Button>
        <Button type="primary">like</Button>
        <Button type="primary">comments</Button>
        <Button type="primary">Favorites</Button>     
      </Space>
    );
  }
