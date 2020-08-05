//可增加项：antd自动完成，该功能将热门搜索列表显示并自动填充

import React, { Component } from 'react'
import { Input, Select } from 'antd';

export default class SearchFrame extends Component {
    render() {

        const { Search } = Input;
        const onChange = e => {
            console.log(e);
        };

        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <div style={{ marginLeft: '22%' }}>
                <Select defaultValue="综合" style={{ width: '80px' }} onChange={handleChange}>
                <Option value="综合">综合</Option>
                <Option value="比赛">比赛</Option>
                <Option value="社区">社区</Option>
                <Option value="用户">用户</Option>
                </Select>

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