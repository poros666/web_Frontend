import { PageHeader,Descriptions } from 'antd';
import { Input } from 'antd';
import React, { Component } from 'react'
import '../../style/findTeam/findTeam.css'

export default class teamNav extends Component {
  render() {
    const { Search } = Input;
    return (
    <>
      <div id="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title="比赛名称"
        >
          <Descriptions size="small">
            <Descriptions.Item label="比赛简介">比赛简介</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <div id='Search'>
      <Search placeholder='输入比赛搜索名称' enterButton/>
      </div>
      </>
    )
  }
}