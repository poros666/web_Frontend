import React, { Component } from 'react'
import {Card,Row,Col,List} from 'antd'
import {LockOutlined,LockFilled,StarOutlined} from '@ant-design/icons'

const fileData=[
    {
        fileID:1,
        filename:'file1',
        private:0
    },
    {
        fileID:2,
        filename:'file2',
        private:1
    }
]

export default class UserColle extends Component {
    constructor(props){
        super(props)
        this.state={
            data:fileData
        }
    }
    
    render() {
        return (
            <div>
              <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                        title={<a href={"#/collection/"+item.fileID}>{item.filename}</a>}
                        extra={item.private?<LockFilled/>:<LockOutlined/>}
                        >
                            2020-8-15更新，阿巴阿巴一点东西，删掉也可以
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        )
    }
    handleChangePage(fileID)
    {
      this.context.router.push(
        {
          path:'#/collection/'+fileID,
          ID:fileID
        }
      )
    }
}
