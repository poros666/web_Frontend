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
import 'antd/dist/antd.css';
import '../../style/comm/comm.css'
import  CommentList from '../../components/community/CommentList'
import ReadMoment from '../../components/community/ReadMoment'
import Axios from 'axios'
import CONSTURL from '../../components/community/config'



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

    createComment(content){
      var json=
      {
        "MomentId":this.state.Pid,
        "Account":123,
        "Content":content,
        "Time":'time'
      }
      console.log(json)
      var url=CONSTURL.hosturl+CONSTURL.CreateComment
      Axios.post(url,json).then((res)=>{
    //    console.log(res.data)
      })

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
                    <div className='middle'>


                        <ReadMoment momentId={Pid}/>

                        <ToComment createComment={this.createComment}/>

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













  



