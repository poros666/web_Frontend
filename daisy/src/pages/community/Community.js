//
// made by ykn
//
import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import 'antd/dist/antd.css'
import MomentList from '../../components/community/MomentList'
import CreateMoment from '../../components/community/CreateMoment'
import moment from 'moment'
import Axios from 'axios'
import CONSTURL from '../../components/community/config'
import '../../style/community/community.css'
import { isLogined } from '../../utils/auth'
Axios.defaults.baseURL = '/api'

export default class Community extends Component {
  constructor(props) {
    super(props)
    //       console.log('载入data数据')
    //改为数据请求

    //再这里绑定元数据
    this.createMoment = this.createMoment.bind(this)
  }
  // componentWillMount(){
  // }

  componentDidMount() {
    //     console.log('componentDidMount')
  }

  //组件功能实现

  createMoment(title, content) {
    if (isLogined()) {
      //传递json到服务端
      var t = moment().format('YYYY-MM-DDTHH:mm:ssC') //    console.log(title)
      //   console.log(content)

      var json = {
        Account: JSON.parse(localStorage.userData).account.toString(),
        Title: title,
        Time: t,
        Content: content,
      }

      console.log(" 创建动态的信息",json)
      var url = CONSTURL.CreatMoment
      var token = JSON.parse(localStorage.getItem('token')).token
      Axios.post(url, json, {
        headers: { Authorization: 'Bearer ' + token },
      }).then((res) => {
        console.log(res)
        window.location.reload()
      })
    } else {
      window.alert('未登陆，将跳转到登陆界面')
      window.location.hash = '#/home'
    }
  }

  render() {
    //        console.log('mounting')
    return (
      <div>
        <HeaderNav />
        <div style={{ height: '80px' }} />
        <FloatHelper />

        {
          //本体
        }

        <div className='MomentList'>
          {
            //这里比较简单就直接写死在html里面，不做额外的子组件了
          }

          <br />
          <br />

          <MomentList />

          <CreateMoment createMoment={this.createMoment} />

          {/* <Test/> */}
        </div>

        {
          //本体
        }

        <Footer />
      </div>
    )
  }
}
