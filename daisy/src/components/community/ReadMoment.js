//
// made by ykn
//
import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Card,Avatar,Space,Button } from 'antd'
import '../../style/comm/comm.css'
import { MessageOutlined, LikeOutlined, StarOutlined,ShareAltOutlined,AlertOutlined } from '@ant-design/icons'
import ReportButton from './ReportButton'




const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  

 function getMomentContent(Pid){
    //do something
    
  }


export default class ReadMoment extends Component {
    

    constructor(props){
        super(props)


        var tempId=this.props.momentId
        
        getMomentContent(tempId)
                
        const sourceData=[
            {
                authorAvatar: "boss",
                authorName: "i is kk i think cry",
                authorUid: 132,
                title:"Card title" ,
                content:"this is the card content for testing",
                bordered:false ,
                time:123,
                likes:133,
                stars:114,
                comments:514,
            }
        ]


        this.state={
            data:sourceData
        }
    }
    
    render() {
        return (
            <div>
                <Card
                    
                    title={this.state.data[0].title}
                    bordered={this.state.data[0].bordered} 
                    extra={//之后可以用button之类的包装一下做成超链接
                        //这里的头像要动态生成
                        <div align="right">

                        <a href={"#/Moment/"+this.state.data[0].authorUid}>
                            <Avatar src={require("../../img/avatar/"+this.state.data[0].authorAvatar+".jpg")}></Avatar>
                        </a>
                                        
                        <p>{this.state.data[0].authorName}</p>

                        </div>
                        }
                    actions={[
                        <Button type='text'>
                            <IconText icon={StarOutlined} text={this.state.data[0].stars} key="list-vertical-star-o" />
                        </Button>,

                        <Button type='text'>
                            <IconText icon={LikeOutlined} text={this.state.data[0].likes} key="list-vertical-like-o" />
                        </Button>,

                        <Button type='text'>
                            <IconText icon={ShareAltOutlined} text="分享" key="list-vertical-share-o" />
                        </Button>,

                        <ReportButton/>,

                        ]}
                    >
                

                {
                    //下面是帖子的内容部分
                }
                <p>
                   { this.state.data[0].content}
                </p>

                </Card>
                
                <br/>

            </div>
        //     <div className="site-card-border-less-wrapper">

        //         <p>注释里面就别检查了8</p>
        //    
        //   </div>
        )
    }
}



