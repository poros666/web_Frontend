import React, { Component } from 'react'
import {Card,Button,Modal,Form,Input,Select,Popconfirm,Popover,List} from 'antd'
import {LockOutlined,LockFilled,DeleteOutlined,PlusCircleOutlined} from '@ant-design/icons'

const {Meta}=Card
const {Option}=Select

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
    
    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
    };
    
    render() {
        return (
            <div>
                <Button
                type="text" 
                size='large'
                icon={<PlusCircleOutlined/>}
                style={{margin:20}}
                onClick={()=>{this.showModal()}}
                >
                    新建收藏夹
                </Button>
                <Modal
                title="新建收藏夹"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                      取消
                    </Button>,
                    <Button key="submit" type="primary" onClick={this.handleOk}>
                      创建
                    </Button>,
                  ]}
                >
                    <Form>
                        <Form.Item label='收藏夹名称'>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='收藏夹类型'>
                            <Select defaultValue='post' style={{ width: 120 }}>
                                <Option value='post'>帖子收藏夹</Option>
                                <Option value='moment'>动态收藏夹</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label='隐私状态'>
                        <Select defaultValue='private' style={{ width: 120 }}>
                            <Option value='private'>仅自己可见</Option>
                            <Option value='public'>公开</Option>
                        </Select>
                        </Form.Item>
                    </Form>
                
                </Modal>
                

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
