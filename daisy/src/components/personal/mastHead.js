import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {UserOutlined,EditOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import '../../style/personal/editInform.css'

export default class MastHead extends Component {
    constructor(props){
        super(props)
        this.state={
            account:'11111',
            nickname:'同济大学有暑假吗',
            signature:'是个疯子'
        }
    }
    render() {
        {/*role=true是用户本人的视角 role=false是其他人的视角 */}
        const role=true

        return (
            <div style={{textAlign:"center"}} className=".site-card-border-less-wrapper">
                <Card className="ed_card" bordered={false}>
                    <Avatar 
                    style={{backgroundColor: '#87d068'}} 
                    icon={<UserOutlined />}
                    />
                    <div style={{paddingTop:20}}>
                        <p>{this.state.nickname}</p>
                        <p>{this.state.signature}</p>
                        {(function () {
                            if(role==true){
                                return(
                                    <Link to={"/editinform"}>
                                        <EditOutlined/>
                                    </Link>
                                ) 
                            }
                        })()}
                        
                    </div>
                </Card>
            </div>
        )
    }
}