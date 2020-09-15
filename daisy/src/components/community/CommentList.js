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
         }
         this.updateADComp()
      }

      componentDidMount(){
        var url=CONSTURL.hosturl+CONSTURL.GetCommentList+this.state.Pid
        Axios.get(url).then((res)=>{
      //    console.log(res.data)
          this.setState({data:res.data})
        })
      }

      createReply(content){
        var json=
        {
          "CommentId":this.state.Pid,
          "Account":"account",
          "Content":content,
          "Time":"Time",
        }

        var url=CONSTURL.hosturl+CONSTURL.CreateReply
        Axios.post(url,json).then((res)=>{

        })
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
      let objArr=this.state.data
   //   console.log(objArr)
        return (
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
                              <ReportButton/>
                            </>,
                            <span>
                              {this.state.renderAdComponent[index] ? <ToComment  className="childComment" createComment={this.createReply}/> : null}
                            </span>,
                            
                          ]}
                      author={item.Nickname}
                      avatar={<Avatar
                        src={item.Icon}
                      />}
                      content={item.Content}
                      datetime={item.Time}
                      >
                      <Reply replyId={item.CommentId}/>
                   
                      </Comment>
                    </li>
                  ))
                }


                 
            </div>
        )
    }

    
}
