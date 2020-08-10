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
import Item from 'antd/lib/list/Item';
import { Collapse } from 'antd';



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


      }

      

      componentDidMount(){
        this.updateADComp()
      }

      updateADComp(){
        let temp=this.state.data.length
        for(let i=0;i<temp;i++){
          this.setState((state)=>{
            state.renderAdComponent.push(false)
          })
          console.log(this.state.renderAdComponent)
        }
      }



      submitComment(i){
        console.log('yes')
        this.setState({renderAdComponent: !this.state.renderAdComponent})
      }

    render() {      
      //初始化render数组状态
        let list=this.state.data.map((item,i)=>(
          <Item
           key={i}

           >

          </Item>
        ))

        return (
            <div>
                 <List
                  className="comment-list"
                  header={`${this.state.data.length} replies`}
                  itemLayout="horizontal"
                  dataSource={this.state.data}//这里的数据源处理一下以后尝试自动生成帖子                    
                  renderItem={item => (
                  <li key="">
                      <Comment
                      className='middle'
                      actions={ 
                          [
                            <span
                                key="comment-list-reply-to-0" 
                                onClick={this.submitComment}
                                >                                           
                                Reply to
                            </span>,
                            <>
                              <ReportButton/>
                            </>,
                            <span>
                              {this.state.renderAdComponent ? <ToComment/> : null}
                            </span>,
                            
                          ]}
                      author={item.author}
                      avatar={item.avatar}
                      content={item.content}
                      datetime={item.datetime}
                      >
                          <List
                              className="comment-list"
                              header={`${this.state.data.length} replies`}
                              itemLayout="horizontal"
                              dataSource={this.state.data}//这里的数据源处理一下以后尝试自动生成帖子                    
                              renderItem={item => (
                              <li>
                                  <Comment
                                  className='middle'
                                  author={item.author}
                                  avatar={item.avatar}
                                  content={item.content}
                                  datetime={item.datetime}>
                                  </Comment>
                              </li>
                              )}
                          />

                      </Comment>
                  </li>
                  )}
                />
            </div>
        )
    }

    
}
