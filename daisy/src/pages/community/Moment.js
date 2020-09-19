//
// made by ykn
//
import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import '../../style/comm/comm.css'
import ToComment from '../../components/community/ToComment'
import 'antd/dist/antd.css';
import  CommentList from '../../components/community/CommentList'
import ReadMoment from '../../components/community/ReadMoment'
import Axios from 'axios'
import CONSTURL from '../../components/community/config'
import moment from 'moment-timezone'
import { isLogined } from '../../utils/auth'
import Reply from '../../components/community/Reply'



export default class Moment extends Component {
    constructor(props){
      super(props)

      this.createComment=this.createComment.bind(this)

      let tempId=this.props.match.params.id

      //这里根据tempid请求数据
    
      this.state={
        Pid:tempId
       }


    //   console.log(this.state.Pid)
    }


    // componentWillMount(){

    //   //至此为止我们接收到了动态传过来了id，接着就是根据id取到值


    // }

    createComment(content,isReply){
      if(isLogined()){
        var t=moment().format('YYYY-MM-DDTHH:mm:ssC')
        console.log("sdasd", JSON.parse(localStorage.userData))
        if(isReply!=-1){
          var json=
          {
            "MomentId": isReply ,
            "Account":JSON.parse(localStorage.userData).account.toString(),
            "Content":content,
            "Time":t
          }
        }else{
          var json=
          {
            "MomentId": Number(this.state.Pid) ,
            "Account":JSON.parse(localStorage.userData).account.toString(),
            "Content":content,
            "Time":t
          }
        }

        console.log("reply final data",json)
        var url=CONSTURL.CreateComment
        var token = JSON.parse(localStorage.getItem('token')).token
        Axios.post(url,json, {
          headers: { Authorization: 'Bearer ' + token },
        }).then((res)=>{
          console.log(res)
          window.location.reload()
        })
  
      }
      else{
        window.alert("未登录，将跳转至登陆界面")
        window.location.hash='#/home'
      }
     
    }



    render() {
        var Pid=this.state.Pid

        return (
            <div className='backcolor'>
                <HeaderNav/>
                <FloatHelper/>
                {
                    //本体
                }
                <div className='Body'>  
                    <div className='momentMiddle'>


                        <ReadMoment momentId={Pid}/>

                        <ToComment createComment={this.createComment} isReply={-1}/>

                        <CommentList 
                          momentId={Pid} 
                          createComment={this.createComment}
                        />

                       
                    </div>
                </div>


                {
                    //本体
                }
                <Footer/>
            </div>
        )
    }
}













  



