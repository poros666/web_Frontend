//
// made by ykn
//
import { Comment, List,Avatar } from 'antd';

import React, { Component } from 'react'
import '../../style/comm/comm.css'
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../../style/comm/comm.css'
import  ToComment from '../../components/community/ToComment'
import ReportButton from './ReportButton'
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import '../../style/community/Comment.css'
import Reply from './Reply'
import CONSTURL from './config';
import Axios from 'axios';
import {isLogined} from '../../utils/auth'
import unLogined from './Unlogined'
import Loading from './Loading'


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



export default class CommentList extends Component {

    constructor(props){
        super(props)
        var tempId=this.props.momentId
        this.submitComment=this.submitComment.bind(this)
        this.childCreateComment=this.childCreateComment.bind(this)
        this.createReply=this.createReply.bind(this)
        //这里根据tempid请求数据

        this.state={
          renderAdComponent:[],
          data:[],
          Pid:tempId,
          isLoading:true,
          image:''
         }
         this.updateADComp()
      }

      componentDidMount(){
        console.log("commmentlist running")
        var url=CONSTURL.GetCommentList+this.state.Pid
        Axios.get(url).then((res)=>{
          console.log("get daole :",res.data)
          var result=res.data
          for(var i=0;i<result.length;i++){
            result[i].Time=this.deleteLetter(result[i].time)
          }
          this.setState({data:result})
          this.setState({isLoading:false})
         console.log("保存下来的：",this.state.data)

         for(var i=0;i<1;i++){
           Axios.get(this.state.data[i].icon).then((ress)=>{
             console.log(ress.data)
             this.setState({image:ress.data})
           })
         }

        })
      }

      deleteLetter(str) {
        if(str===undefined){
          str="this is undefined"
        }
        var result;
      
        var reg = /[a-zA-Z]+/;  //[a-zA-Z]表示匹配字母，g表示全局匹配
      
        while (result = str.match(reg)) { //判断str.match(reg)是否没有字母了
      
          str = str.replace(result[0], ' '); //替换掉字母  result[0] 是 str.match(reg)匹配到的字母
      
        }
        return str;
      }



      createReply(content,isReply){
        if(isLogined()){

          var t=moment().format('YYYY-MM-DDTHH:mm:ssC')
          if(isReply!=-1){
            var json=
            {
              CommentId:isReply,
              Account:JSON.parse(localStorage.userData).account.toString(),
              Content:content,
              Time:t
            }
          }else{
            var json=
            {
              CommentId:Number(this.state.Pid),
              Account:JSON.parse(localStorage.userData).account.toString(),
              Content:content,
              Time:t
            }
          }

          console.log("to reply data",json)

          var url=CONSTURL.CreateReply
          var token = JSON.parse(localStorage.getItem('token')).token
          Axios.post(url,json,
            {
              headers: { Authorization: 'Bearer ' + token },
            }
            ).then((res)=>{
            window.location.reload()
          })
        }
        else{
          window.alert("未登录，跳转至登陆界面")
          window.location.hash='#/login'
        }
      }

      updateADComp(){
        let temp=this.state.data.length
       // console.log(temp)
        for(let i=0;i<temp;i++){
          let tmp=this.state.renderAdComponent
          tmp.push(false)
          this.setState({
            renderAdComponent:tmp
          })
        }
    //    console.log(this.state.renderAdComponent)
      }

      childCreateComment(content){
        this.props.createComment(content)
      }

      submitComment(index){
     //   console.log(index)
      //  console.log("i am clicked")
        this.changeRenderADComp(index)
      }

      changeRenderADComp(index){
        let ans=this.state.renderAdComponent
        ans[index]=!ans[index]
        this.setState({
          renderAdComponent:ans
        })
      }

    render() {      
      //初始化render数组状态
      console.log("state",this.state)
      var objArr=this.state.data
      console.log("obj data",objArr)
        return (
            this.state.isLoading?<Loading />:
            <div id="firstLayer">
                {
                  objArr.map((item,index)=>(

                    <li style={{listStyle:"none"}} key={item+index}>
                      <Comment
                      className='middle'
                      actions={ 
                          [
                            <span 
                                className="replyList"
                                key="comment-list-reply-to-0" 
                                onClick={this.submitComment.bind(this,index)}
                                >                                           
                                Reply to
                            </span>,
                            <>
                              <ReportButton   
                                ReportUID={this.state.Pid} 
                                ReporterUID='test2' 
                                Time={moment().format("YYYY-MM-DDTHH:mm:ssC")}
                                ContentType="comment"
                              />
                            </>,
                            <span>
                              {this.state.renderAdComponent[index] ?
                               <ToComment  className="childComment" createComment={this.createReply} isReply={item.commentId}/> : 
                               null}
                            </span>,
                            
                          ]}
                      author={item.nickname}
                      avatar={
                        <a href={'#/personal/account='+item.account}>
                        <Avatar
                          src={this.state.image}
                        />
                        </a>
                      }
                      content={item.content}
                      datetime={item.time}
                      >
                      <Reply replyId={item.commentId}/>
                   
                      </Comment>
                    </li>
                  ))
                }


                 
            </div>
        )
    }

    
}
