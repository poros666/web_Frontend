import React, { Component } from 'react'
import { List, Avatar } from 'antd';


export default class PostList extends Component {
    constructor(props){
        super(props)
        

      var sourceData = [
        {
          Uid:110,
          Pid:1,
          avatarSrc:'boss',
          title: 'Ant Design Title 1',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team'
        },
        {
          Uid:110,
          Pid:2,
          avatarSrc:'boss',
          title: 'Ant Design Title 2',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

        },
        {
          Uid:110,
          Pid:3,
          avatarSrc:'boss',
          title: 'Ant Design Title 3',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team'

        },
        {
          Uid:110,
          Pid:4,
          avatarSrc:'boss',
          title: 'Ant Design Title 4',
          description:'zzzzzz我睡着了 但是我没有摸鱼'
        },
      ];


        this.State={
          data:sourceData
        }
    }


    render() {
        return (
            <div>
                  <List
                                  itemLayout="horizontal"
                                  dataSource={this.State.data}
                                  renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                          avatar={

                                            //头像的来源和指向的地址
                                            <a href={"#/ReadPost/"+item.Uid}>
                                              <Avatar src={require("../../img/avatar/"+item.avatarSrc+".jpg")}></Avatar>
                                            </a>
                                          }




                                          //帖子的名字和指向的地址，传一个pid，post_id
                                            title={<a href ={"#/ReadPost/"+item.Pid}>{item.title}</a>}



                                            description={<p>{item.description}</p>}
                                            
                                        />
                                    </List.Item>
                                  )}
                              />
            </div>
        )
    }
}
