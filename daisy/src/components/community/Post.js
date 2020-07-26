import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card,Avatar,Space,Button } from 'antd';
import '../../style/comm/comm.css'
export default class Post extends Component {
    render() {
        return (
            <div className='site-card-border-less-wrapper'>
                <Card 
                    title="Card title" 
                    bordered={false} 
                    extra={//之后可以用button之类的包装一下做成超链接
                        //这里的头像要动态生成
                        <>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />                     
                        </>
                        }
                >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                
                <br/>
                <Func/>

            </div>
        //     <div className="site-card-border-less-wrapper">

        //         <p>注释里面就别检查了8</p>
        //    
        //   </div>
        )
    }
}



function Func() {
    return (
      <Space>
        <Button ghost><p style={{color:'black'}}>点赞</p></Button>
        <Button ghost><p style={{color:'black'}}>收藏</p></Button>
        <Button ghost><p style={{color:'black'}}>分享</p></Button>
        <Button ghost><p style={{color:'black'}}>举报</p></Button>     
      </Space>
    );
  }
