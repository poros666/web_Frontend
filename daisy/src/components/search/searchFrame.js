import React, { Component } from 'react'
import { Input, Select } from 'antd';
import { Route, Link } from 'react-router-dom';
import { searchRoutes } from '../../routes/index'

const { Search } = Input;
const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class SearchFrame extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
          kw: this.props.kw,
          type: "comp"
        }

    }

    inputChange(e){
        this.setState({
          kw: e.target.value
        })
        console.log(this.state.kw)
    }

    keyDown(e){
        if(e.keyCode === 13){
        }
    }

    searchJump(value){
        console.log(1)
        console.log(this.state.kw)
        //console.log(value)
        //var w=window.open('about:blank')
        window.location.hash=`#/searchResult/type=${this.state.type}/${this.state.kw}`
        //console.log(this.state.type)
    }

    orderChange(e){
        //console.log(e)
        //console.log('radio checked', e.target.value);
        if(e=="比赛"){
            this.setState({
            type: "comp"
            },()=>console.log(this.state.type))          
        }
        else if(e=="社区"){
            this.setState({
            type: "comm"
            },()=>console.log(this.state.type))       
        }
        else if(e=="用户"){
            this.setState({
            type: "user"
            },()=>console.log(this.state.type))            
        }
        //console.log('radio checked', this.state.type);
    }

    render() {
        // var searchWord=this.props.history.location.search
        // console.log(searchWord)

        return (
            <div style={{ marginLeft: '22%' }}>
                <Select defaultValue="比赛" initialValues="比赛" style={{ width: '80px' }} onChange={this.orderChange.bind(this)}>
                <Option value="比赛">比赛</Option>
                <Option value="社区">社区</Option>
                <Option value="用户">用户</Option>
                </Select>

                <Search
                    placeholder="搜搜看你感兴趣的内容吧～"                  
                    style={{ width: '65%'}}

                    value={this.state.kw}
                    onSearch={value => this.searchJump(value)}
                    //onKeyDown={e=>this.keyDown(e)}
                    onChange={this.inputChange.bind(this)}
                />
            </div>
        )
    }
}