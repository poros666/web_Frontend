import React, { Component } from 'react'
import {Card,Button,Col,List} from 'antd'
import {LockOutlined,LockFilled,DeleteOutlined} from '@ant-design/icons'



export default class UserColle extends Component {
    constructor(props){
        super(props)
        this.deleteFile.bind(this)
        this.changePrivacy.bind(this)
        this.state={
            data:[
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
        }
    }
    changePrivacy(fileID){
        let fdata=[...this.state.data]
        for(let i=0;i<fdata.length;i++){
            if(fdata[i].fileID==fileID){
                fdata[i].private=!fdata[i].private
            }
        }
        this.setState({
            data:fdata
        })
    }
    deleteFile(fileID){
        let fdata=[...this.state.data]
        for(let i=0;i<fdata.length;i++){
            if(fdata[i].fileID==fileID){
                fdata.splice(i,1)
            }
        }
        this.setState({
            data:fdata
        })
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
                        extra={
                            <div>
                                <Button 
                                type="text" 
                                size='small'
                                icon={item.private?<LockFilled style={{color:'#1890ff'}}/>:<LockOutlined style={{color:'#1890ff'}}/>}
                                onClick={()=>this.changePrivacy(item.fileID)}
                                />
                                <Button 
                                type="text" 
                                size='small'
                                icon={<DeleteOutlined style={{color:'#ff0000'}}/>}
                                onClick={()=>this.deleteFile(item.fileID)}
                                />
                                
                            </div>}
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
