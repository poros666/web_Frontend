import React, { Component } from 'react'
import { Input } from 'antd';
import { Link } from 'react-router-dom'

const { Search } = Input;

const onChange = e => {
    console.log(e);
    };
    
export default class EasySearchFrame extends Component {

    keyDown(e){
        if(e.keyCode === 13){
        }
    }

    searchJump(value){
        console.log(value)
        var w=window.open('about:blank')
        w.location.href="#/searchResult/type=mixed?"+this.props.keyword
    }
    
    render() {

        return (
            <div style={{marginLeft: '22%'}}>
                <Search
                    placeholder="搜搜看你感兴趣的内容吧～"

                    onSearch={value => this.searchJump(value)}
                    onKeyDown={e=>this.keyDown(e)}
                    onChange={onChange}

                    style={{ width: '68%'}}
                />
            </div>
        )
    }
}
