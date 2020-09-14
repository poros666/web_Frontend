//
// made by ykn
//
import { Comment, List } from 'antd';

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
        //这里根据tempid请求数据
        const sourceData = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(1, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(1, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
          {
            author: 'kk',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(2, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(2, 'days')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
        ];
        this.state={
          renderAdComponent:[],
          data:sourceData,
          Pid:tempId,
         }
         this.updateADComp()
      }

      componentDidMount(){
        //
      }

      updateADComp(){
        let temp=this.state.data.length
        console.log(temp)
        for(let i=0;i<temp;i++){
          let tmp=this.state.renderAdComponent
          tmp.push(false)
          this.setState({
            renderAdComponent:tmp
          })
        }
        console.log(this.state.renderAdComponent)
      }

      childCreateComment(content){
        this.props.createComment(content)
      }

      submitComment(index){
        console.log(index)
        console.log("i am clicked")
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
        return (
            <div id="firstLayer">
              {/* <p className="childComment">我是kkkkkkkkkkkk</p> */}
                {
                  objArr.map((item,index)=>(
                    <li style={{listStyle:"none"}}>
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
                              {this.state.renderAdComponent[index] ? <ToComment  className="childComment" createComment={this.childCreateComment}/> : null}
                            </span>,
                            
                          ]}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                      >
                        {
                            objArr.map((item,index)=>(
                              <li key={item+index}>
                                <Comment
                                className='middle'
                                actions={ 
                                    [
                                      <>
                                        <ReportButton/>
                                      </>,
                                    ]}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                >
                                </Comment>
                              </li>))
                        }
                           
                      </Comment>
                    </li>
                  ))
                }


                 
            </div>
        )
    }

    
}
