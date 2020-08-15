import React, { Component } from 'react'
import {Card,Badge,Avatar,Input, Descriptions, Button} from 'antd'
import HeaderNav from '../../components/comm/HeaderNav'
import '../../style/personal/editteam.css'
import { CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;


export default class EditTeam extends Component{
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.state={
            teamID:1,
            compID:1,
            teamname:'team 1',
            limit:10,
            compname: 'comp 1',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            member:[
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            ]
        }
    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
    deleteMember(index){
        const member=[...this.state.member]
        member.splice(index,1)
        this.setState({
            member:member
        })
    }
    render(){
        return(
            <div>
                <HeaderNav/>
                <div className='edteam_content'>
                    <Card
                    id='editteam_card'>
                        <p>teamID:{this.props.match.params.teamID}</p>
                        <Descriptions 
                        bordered
                        column={1}>
                            <Descriptions.Item
                            label='队名'>
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="teamname" 
                                value={this.state.teamname} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item
                            label='人数上限'>
                                <TextArea
                                autoSize 
                                bordered={false} 
                                name="limit" 
                                value={this.state.limit} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item
                            label='简介'>
                                <TextArea
                                autoSize
                                bordered={false} 
                                name="description" 
                                value={this.state.description} 
                                onChange={this.inputChange}
                                />
                            </Descriptions.Item>
                            <Descriptions.Item
                            label='成员'>
                                <div style={{width:700}}>
                                {
                                this.state.member.map((item,index)=>{
                                    return(
                                        <span className="avatar-item">
                                            <Badge 
                                            count={
                                                <Button 
                                                id='delete_button'
                                                type="primary" 
                                                danger 
                                                shape='circle' 
                                                size='small'
                                                icon={<CloseOutlined/>}
                                                onClick={this.deleteMember.bind(this,index)}
                                                />
                                            }>
                                                <Avatar 
                                                size={64} 
                                                shape="circle" 
                                                src={item}
                                                />
                                            </Badge>
                                        </span>
                                    )
                                })
                                }
                                </div>
                            </Descriptions.Item>
                        </Descriptions>
                        <div className='saveButtons'>
                            <Button type='primary'>保存</Button>
                            <Button>取消</Button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}