import React, { Component } from 'react'
import {Card,Button,Popover,List} from 'antd'
import {StarFilled} from '@ant-design/icons'
import '../../style/personal/collection.css'
import HeaderNav from '../../components/comm/HeaderNav'
import Footer from '../../components/comm/Footer'
import Axios from 'axios'


export default class PostColletion extends Component {
    constructor(props){
        super(props)
        this.deleteColle.bind(this)
        this.state={
            filename:this.props.match.params.fileName,
            account:this.props.match.params.account,
            data:[],
        }
        var token=JSON.parse( localStorage.getItem('token')).token
        Axios.get("/PostStar?Account="+this.state.account+"&Name="+this.state.filename,
            {headers: { "Authorization": 'Bearer ' +token }})
            .then((res)=>{
                this.setState(
                    {
                        data:res.data
                    }
                )
            })
    }
    deleteColle(file){
        if(this.state.account===JSON.parse( localStorage.getItem('userData')).account)
        {
            var token=JSON.parse( localStorage.getItem('token')).token
            Axios.delete('/PostStar?ProjectId='+file.projectId+'&GroupId='+file.groupId+'&PostId='+file.postId+'&Account='+this.state.account+'&Name='+this.state.filename,
            {headers: { "Authorization": 'Bearer ' +token }})
            .then(()=>{
                let fdata=[...this.state.data]
                for(let i=0;i<fdata.length;i++){
                    if(fdata[i].postId==file.postId){
                        fdata.splice(i,1)
                    }
                }
                this.setState({
                    data:fdata
                }
                )
            })
        }
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
                                        onClick={()=>this.deleteColle(item)}
                                        />
                                    </Popover>
                                }>
                                    <a href={'#//postpage/MatchId='+item.projectId+'/groupId='+item.groupId+'/Pid='+item.postId}>
                                        {item.postId}
                                    </a>
                                    <p>
                                        {item.content}
                                    </p>
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
