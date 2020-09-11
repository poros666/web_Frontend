//
// made by ykn
//
import React, { Component } from 'react'
import { List, Avatar,Col, Pagination,Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Item from 'antd/lib/list/Item';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);





export default class MomentList extends Component {
    constructor(props){
        super(props)
    

      var sourceData = [
        {
          Uid:110,
          Pid:1,
          avatarSrc:'boss',
          title: '我最讨厌汇编了',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:2,
          avatarSrc:'boss',
          title: 'Ant Design Title 2',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:3,
          avatarSrc:'boss',
          title: 'Ant Design Title 3',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:4,
          avatarSrc:'boss',
          title: 'Ant Design Title 4',
          description:'zzzzzz我睡着了 但是我没有摸鱼',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:1,
          avatarSrc:'boss',
          title: '当然c也很讨厌',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:2,
          avatarSrc:'boss',
          title: 'Ant Design Title 2',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:3,
          avatarSrc:'boss',
          title: '总而言之要写课设的就讨厌',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:4,
          avatarSrc:'boss',
          title: 'Ant Design Title 4',
          description:'zzzzzz我睡着了 但是我没有摸鱼',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:1,
          avatarSrc:'boss',
          title: 'Ant Design Title 1',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:2,
          avatarSrc:'boss',
          title: 'Ant Design Title 2',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:3,
          avatarSrc:'boss',
          title: 'Ant Design Title 3',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:4,
          avatarSrc:'boss',
          title: 'Ant Design Title 4',
          description:'zzzzzz我睡着了 但是我没有摸鱼',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:1,
          avatarSrc:'boss',
          title: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,
        },
        {
          Uid:110,
          Pid:2,
          avatarSrc:'boss',
          title: '不是 就 你一定要喊吗？',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:3,
          avatarSrc:'boss',
          title: '。。。。',
          description:'Ant Design, a design language for background applications, is refined by Ant UED Team',
          stars:123,
          likes:32,
          comments:5,

        },
        {
          Uid:110,
          Pid:4,
          avatarSrc:'boss',
          title: 'Ant Design Title 4',
          description:'zzzzzz我睡着了 但是我没有摸鱼',
          stars:123,
          likes:32,
          comments:5,
        },
      ];
        this.state={
          data:sourceData,
          currentData:[],
          total:16,//这里的total也是要获取的数据
          pageSize: 10,
          pageNumber:parseInt(window.location.hash.slice(-1), 0) || 1 //获取当前页面的hash值，转换为number类型
        }
    }

    componentDidMount() {
      this.handleAnchor() //页面刷新时回到刷新前的page
    }
    handleAnchor() {
      this.onPageChange(this.state.pageNumber, this.state.pageSize); //手动调用onPageChange,传入当前页数和每页条数
    }
    
    onPageChange=(page,pageSize)=>{
      console.log("page:",page);
      this.setState({
        pageNumber: page
      }, () => {
        window.location.hash = `#/Community/pagenum=${page}`; //设置当前页面的hash值为当前page页数
      })
      this.setState((state)=>{
        for(let i=0;i<state.pageSize;i++){
          state.currentData.pop()
        }
        



        //这里要负责接受数据
        for(let i=pageSize*(page-1);i<state.total&&i<pageSize*page;i++){
          console.log(i)
          state.currentData.push(this.state.data[i])
        }





        return{
          currentData:state.currentData,
        }
      }
     );
   }



    render() {
        return (
            <div>
                  <List
                    itemLayout="horizontal"
                    dataSource={this.state.currentData}
                    renderItem={item => (
                      <List.Item
                          key={item.title}
                          actions={[
                                    <IconText icon={StarOutlined} text={item.stars} key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />,
                                  ]}
                                  >
                          <List.Item.Meta
                            avatar={

                              //头像的来源和指向的地址
                              <a href={"#/Moment/"+item.Uid}>
                                <Avatar src={require("../../img/avatar/"+item.avatarSrc+".jpg")}></Avatar>
                              </a>
                            }

                            //帖子的名字和指向的地址，传一个pid，moment_id
                              title={<a href ={"#/Moment/"+item.Pid}>{item.title}</a>}

                              description={<p>{item.description}</p>}
                              
                          />

                      </List.Item>
                    )}
                  />
                  <Col offset={9}>
                    <Pagination 
                      showQuickJumper 
                      current={this.state.pageNumber}
                      defaultPageSize={this.state.pageSize} 
                      total={this.state.total}
                      onChange={this.onPageChange} 
                    />
                  </Col>
            </div>
        )
    }
}
