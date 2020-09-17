import React, { Component } from 'react'
import {Card,Button,Popover,List} from 'antd'
import {StarFilled} from '@ant-design/icons'
import '../../style/personal/collection.css'
import HeaderNav from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'



const colleData=[
    {
        ID:1,
        tittle:'tittle1',
        description:'balabalabala'
    },
    {
        ID:2,
        tittle:'tittle2',
        description:'balabalabala'
    },
    {
        ID:3,
        tittle:'tittle3',
        description:'balabalabala'
    },
    {
        ID:4,
        tittle:'tittle4',
        description:'balabalabala'
    }
]

export default class Colletion extends Component {
    constructor(props){
        super(props)
        this.deleteColle.bind(this)
        this.state={
            fileID:1,
            filename:'file1',
            private:0,
            data:colleData,
            showInput:false
        }
    }
    deleteColle(ID){
        let fdata=[...this.state.data]
        for(let i=0;i<fdata.length;i++){
            if(fdata[i].ID==ID){
                fdata.splice(i,1)
            }
        }
        this.setState({
            data:fdata
        })
    }

    render() {
        return (
            <div className='collection_page'>
                <HeaderNav/>
                <div id='collection_content'>
                    <Card 
                    id='colle_card'
                    title={this.state.filename}
                    >
                        <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                extra={
                                    <Popover content='取消收藏'>
                                        <Button 
                                        type="text" 
                                        size='small'
                                        icon={<StarFilled style={{color:'#1890ff'}}/>}
                                        onClick={()=>this.deleteColle(item.ID)}
                                        />
                                    </Popover>
                                }>
                                    <a href='#/404'>
                                        {item.tittle}
                                    </a>
                                </Card>
                            </List.Item>
                        )}
                        />
                    </Card>
                </div>
                <Footer/>
            </div>
        )
    }
    
}
