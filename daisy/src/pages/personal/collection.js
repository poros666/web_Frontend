import React, { Component } from 'react'
import {Card,Row,Col,List} from 'antd'
import {LockOutlined,LockFilled,StarOutlined} from '@ant-design/icons'
import '../../style/personal/collection.css'
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'

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
        this.state={
            fileID:1,
            filename:'file1',
            private:0,
            data:colleData
        }
    }
    
    render() {
        return (
            <div className='whole_page'>
                <HeaderNav/>
                <div id='collection_content'>
                    <Card 
                    title={this.state.filename}
                    extra="编辑按钮弹窗">
                        <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                title={item.tittle}
                                extra={<StarOutlined/>}
                                >
                                    {item.description}
                                </Card>
                            </List.Item>
                        )}
                        />
                    </Card>
                </div>
            </div>
        )
    }
    
}
