import React, { Component } from 'react'
import { Input } from 'antd';

export default class EasySearchFrame extends Component {
    render() {

        const { Search } = Input;

        return (
            <div style={{marginLeft: '22%'}}>
                <Search
                    placeholder="搜搜看你感兴趣的内容吧～"
                    onSearch={value => console.log(value)}
                    style={{ width: '68%'}}
                    allowClear 
                    //accesskey="s"
                />
            </div>
        )
    }
}