import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import CreatePost from '../../components/community/CreatePost'
import { List, Avatar ,Space,Button} from 'antd';
import 'antd/dist/antd.css';
import TurnPage from '../../components/comm/TurnPage'




export default class Community extends Component {
    constructor(props){
        super(props)
 //       console.log('载入data数据')
        this.State={
          data:getData()
        }
    }
    componentWillMount(){
//      console.log('componentWillMount')
    }

    componentDidMount(){
 //     console.log('componentDidMount')
    }

    render() {
//        console.log('mounting')
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
                                  dataSource={this.State.data}
                                  renderItem={item => (
                                  <List.Item>
                                      <List.Item.Meta
                                        avatar={
                                          //这里的这个路径之后要改

                                          //一定记得要改哦

                                          <a href={"#/ReadPost/"+item.Uid}>

                                          <Avatar src={require("../../img/avatar/"+item.avatarSrc+".jpg")}></Avatar>
                                          </a>
                                        }

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
const sourceData = [
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



function getData(){
  //这里应该要从远端获取这里先随便写一个
  return sourceData
}


  
