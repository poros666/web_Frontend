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
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../../style/comm/comm.css'
import  CommentList from '../../components/community/CommentList'
import ReadMoment from '../../components/community/ReadMoment'



export default class Moment extends Component {
    constructor(props){
      super()

      this.createComment=this.createComment.bind(this)
      let tempId=this.props.match.params.id

      //这里根据tempid请求数据
      

      this.state={
        Pid:tempId
       }
    }


    // componentWillMount(){

    //   //至此为止我们接收到了动态传过来了id，接着就是根据id取到值


    // }

    createComment(content){
      console.log(content)
    }

    render() {
        return (
            <div className='momentbackcolor'>
                <HeaderNav/>
                <FloatHelper/>
                {
                    //本体
                }
                <div className='momentBody'>  
                    <div className='momentMiddle'>


                        <ReadMoment momentId={this.state.Pid}/>

                        <ToComment createComment={this.createComment}/>

                        <CommentList 
                        momentId={this.state.Pid} 
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













  



