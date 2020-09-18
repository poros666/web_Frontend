//
// made by ykn
//

//记录明天的部分
//排序
//登陆状态的用户体验提升

import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Card, Avatar, Space, Button } from 'antd'
import '../../style/comm/comm.css'
import { LikeOutlined, StarOutlined, CommentOutlined } from '@ant-design/icons'
import ReportButton from './ReportButton'
import CONSTURL from './config'
import Axios from 'axios'
import Loading from './Loading'
//import Report from '../findTeammate/report'
import moment from 'moment'
import { isLogined } from '../../utils/auth'

Axios.defaults.baseURL = '/api'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

export default class ReadMoment extends Component {
  constructor(props) {
    super()

    this.state = {
      data: {
        Icon: '',
        Account: '',
        Nickname: '',
        Title: '',
        Content: '',
        Time: '',
        LikeCount: 0,
        CommentCount: 0,
        StarCount: 0,
      },
      isLoading: true,
      Mid: props.momentId,
    }

    this.getMomentContent(this.state.Mid)
  }

  componentDidMount() {
    // console.log("123123131312")
    this.getMomentContent(this.state.Mid)
  }

  getMomentContent(Mid) {
    //do something
    var url = CONSTURL.GetMoment + Mid
    Axios.get(url).then((res) => {
      console.log(res)
      this.setState({ data: res.data })
      this.setState({ isLoading: false })
    })
  }

  likeMoment() {
    if (isLogined()) {
      var json = {
        MomentId: Number(this.state.Mid),
        Account: 'ddd',
      }
      var url = CONSTURL.LikeMoment

      var token = JSON.parse(localStorage.getItem('token')).token
      Axios.post(url, json, {
        headers: { Authorization: 'Bearer ' + token },
      }).then((res) => {
        window.location.reload()
      })
    } else {
      window.alert('未登录，跳转至登陆界面')
      window.location.hash = '#/login'
    }
  }

  starMoment() {
    if (isLogined()) {
      var json = {
        MomentId: Number(this.state.Mid),
        Account: JSON.parse(localStorage.userData).account.toString(),
        Name: 'Moment',
      }
      console.log()
      var url = CONSTURL.StarMoment
      var token = JSON.parse(localStorage.getItem('token')).token
      Axios.post(url, json, {
        headers: { Authorization: 'Bearer ' + token },
      }).then((res) => {
        window.location.reload()
      })
    } else {
      window.alert('未登录，跳转至登陆界面')
      window.location.hash = '#/login'
    }
  }

  render() {
    return this.state.isLoading ? (
      <Loading />
    ) : (
      <div className='site-card-border-less-wrapper'>
        <Card
          title={this.state.data.Title}
          bordered={false}
          extra={
            //之后可以用button之类的包装一下做成超链接
            //这里的头像要动态生成
            <div align='right'>
              <a href={'#/personal'}>
                <Avatar src={this.state.data.Icon}></Avatar>
              </a>

              <p>{this.state.data.Nickname}</p>
            </div>
          }
          actions={[
            <Button type='text' onClick={this.starMoment.bind(this)}>
              <IconText
                icon={StarOutlined}
                text={this.state.data.StarCount}
                key='list-vertical-star-o'
              />
            </Button>,

            <Button type='text' onClick={this.likeMoment.bind(this)}>
              <IconText
                icon={LikeOutlined}
                text={this.state.data.LikeCount}
                key='list-vertical-like-o'
              />
            </Button>,

            <Button type='text'>
              <IconText
                icon={CommentOutlined}
                text={this.state.data.CommentCount}
                key='list-vertical-share-o'
              />
            </Button>,

            <ReportButton
              ReportUID={this.state.Mid}
              ReporterUID='test2'
              Time={moment().format('YYYY-MM-DDTHH:mm:ssC')}
              ContentType='moment'
            />,
          ]}>
          {
            //下面是帖子的内容部分
          }
          <p>{this.state.data.Content}</p>
        </Card>
        <br />
      </div>
    )
  }
}
