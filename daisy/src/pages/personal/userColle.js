import React, { Component } from 'react'
import {Card,Button,Popconfirm,Popover,List} from 'antd'
import {LockOutlined,LockFilled,DeleteOutlined,PlusCircleOutlined} from '@ant-design/icons'

const {Meta}=Card

export default class UserColle extends Component {
    constructor(props){
        super(props)
        this.deleteFile.bind(this)
        this.changePrivacy.bind(this)
        this.createFile.bind(this)
        this.state={
            data:[
                {
                    fileID:1,
                    filename:'file1',
                    private:0,
                    type:'post'
                },
                {
                    fileID:2,
                    filename:'file2',
                    private:1,
                    type:'moment'
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
    createFile(){

    }
    render() {
        return (
            <div>
                <Button
                type="text" 
                size='large'
                icon={<PlusCircleOutlined/>}
                style={{margin:20}}
                onClick={()=>this.createFile()}
                >
                    新建收藏夹
                </Button>
                <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                        actions={[
                                <Popover content='更改收藏夹隐私状态'>
                                    <Button 
                                    type="text" 
                                    size='small'
                                    icon={item.private?<LockFilled style={{color:'#1890ff'}}/>:<LockOutlined style={{color:'#1890ff'}}/>}
                                    onClick={()=>this.changePrivacy(item.fileID)}
                                    />
                                </Popover>,
                                <Popconfirm 
                                title='要删除收藏夹吗？'
                                onConfirm={()=>this.deleteFile(item.fileID)}
                                okText="确定"
                                cancelText="取消"
                                >
                                    <Button 
                                    type="text" 
                                    size='small'
                                    icon={<DeleteOutlined style={{color:'#ff0000'}}/>}
                                    />
                                </Popconfirm>
                        ]}
                        >
                            <Meta
                            title={<a href={"#/collection/"+item.fileID}>{item.filename}</a>}
                            description={item.type+' file'}
                            />
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
