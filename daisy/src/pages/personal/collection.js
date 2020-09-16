import React, { Component } from 'react'
import {Card,Button,Input,List} from 'antd'
import {EditOutlined,CheckOutlined,StarFilled} from '@ant-design/icons'
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
        this.displayTittle.bind(this)
        this.setShowInput.bind(this)
        this.inputChange=this.inputChange.bind(this)
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

    displayTittle(){
        if(this.state.showInput==false){
            return(
                <div>
                    {this.state.filename}
                    <Button
                    type="dashed"
                    size="small"
                    shape="circle"
                    icon={<EditOutlined/>}
                    onClick={this.setShowInput}
                    />
                </div>
            )
        }else{
            return(
                <div>
                    <Input
                    name="filename"
                    value={this.state.filename} 
                    onChange={this.inputChange}
                    style={{width:300}}
                    />
                    <Button
                    type="dashed"
                    size="small"
                    shape="circle"
                    icon={<CheckOutlined style={{color:'#ff4500'}}/>}
                    onClick={this.setShowInput}
                    />
                </div>
            )
        }
    }
    inputChange(e){
        let o=e.target.value
        this.setState({
            filename:o
        })
    }
    setShowInput=()=>{
        let a=this.state.showInput
        this.setState({
            showInput:!a
        })
    }
    render() {
        return (
            <div className='whole_page'>
                <HeaderNav/>
                <div id='collection_content'>
                    <Card 
                    id='colle_card'
                    title={
                       this.displayTittle()
                    }
                    >
                        <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                title={<a href='#/404'>{item.tittle}</a>}
                                extra={
                                    <Button 
                                    type="text" 
                                    size='small'
                                    icon={<StarFilled style={{color:'#1890ff'}}/>}
                                    onClick={()=>this.deleteColle(item.ID)}
                                    />
                                }>
                                    {item.description}
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
