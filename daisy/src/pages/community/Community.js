import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import CreatePost from '../../components/community/CreatePost'
import { List, Avatar ,Space,Button} from 'antd';
import 'antd/dist/antd.css';
import TurnPage from '../../components/comm/TurnPage'






export default class Community extends Component {
    render() {
        return (
            <div >
                <HeaderNav/>
                <FloatHelper/>


                {
                    //本体
                }



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
                                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHanVXCYX.png" />}

                                          title={<a href ={"#/ReadPost/"+item.Pid}>{item.title}</a>}

                                          description={<p>{item.description}</p>}
                                      />
                                  </List.Item>
                                  )}
                              />


                        <TurnPage/>             
                        <CreatePost/>
                    </div>                





                
                {
                    //本体
                }    



                <Footer/>
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



  
//再这里绑定元数据
const data = [
    {
      Pid:1,
      title: 'Ant Design Title 1',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      Pid:2,
      title: 'Ant Design Title 2',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Pid:3,
      title: 'Ant Design Title 3',
      description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

    },
    {
      Pid:4,
      title: 'Ant Design Title 4',
      description:'zzzzzz我睡着了 但是我没有摸鱼'
    },
  ];
