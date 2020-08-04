import React, { Component } from 'react'
import { Input } from 'antd';

export default class EasySearchFrame extends Component {
    render() {

        const { Search } = Input;
        const onChange = e => {
            console.log(e);
        };

        return (
            <div style={{margin: '5%'}}>
                <Search
                    placeholder="搜搜看你感兴趣的内容吧～"
                    onSearch={value => console.log(value)}
                    style={{ width: '65%'}}
                    allowClear 
                    onChange={onChange}
                />
            </div>
        )
    }
}