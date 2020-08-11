import React, { Component } from 'react'
import {Input,Button,Card} from 'antd'
import '../../style/personal/editInform.css'
import MastHead from '../../components/personal/mastHead'
import HeaderNav from '../../components/comm/HeaderNav'



export default class EditInform extends Component {
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this)
        this.state={
            nameVl:'姓名',
            gender:'性别',
            school:'学校',
            stuNum:'学号',
            major:'专业',
            grade:'年级'
        }
    }

    render() {
        return (
           <div>
               <HeaderNav/>
               <MastHead/>
               <div className="site-card-border-less-wrapper">
                <Card id='ed_card' title="修改个人资料" bordered={false}>
                        <div style={{marginBottom:16}}>
                            <Input addonBefore='姓名' name="nameVl" value={this.state.nameVl} onChange={this.inputChange}/>
                        </div>
                        <div style={{marginBottom:16}}>
                            <Input addonBefore='性别' name="gender" value={this.state.gender} onChange={this.inputChange}/>
                        </div>
                        <div style={{marginBottom:16}}>
                            <Input addonBefore='学校' name="school" value={this.state.school} onChange={this.inputChange}/>
                        </div>
                        <div style={{marginBottom:16}}>
                            <Input addonBefore='学号' name="stuNum" value={this.state.stuNum} onChange={this.inputChange}/>
                        </div>
                        <div style={{marginBottom:16}}>
                            <Input addonBefore='专业' name="major" value={this.state.major} onChange={this.inputChange}/>
                        </div>
                        <div style={{marginBottom:16}}>
                            <Input addonBefore='年级' name="grade" value={this.state.grade} onChange={this.inputChange}/>
                        </div>
                        <div className='buttons'>
                        <Button type='primary'>保存</Button>
                        <Button>取消</Button>
                    </div>
                </Card>
                </div>
           </div>         
        )
    }
    inputChange(e){
        let o={}
        o[e.target.name]=e.target.value
        this.setState(o)
    }
}
