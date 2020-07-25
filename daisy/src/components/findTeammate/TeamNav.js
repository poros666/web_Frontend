import React, { Component } from 'react'
import {Input} from 'antd'
import { AudioOutlined } from '@ant-design/icons'

export default class TeamNav extends Component {
  render() {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      )
    return (
        <>
        <div>
            <div id='matchName'><a>比赛名称</a></div>
            <br/>
            <p>比赛简介</p>
        </div>
        <div>
            <Search placeholder='输入比赛搜索名称' enterButton/>
        </div>
        </>
        )
  }
}