import React, { Component } from 'react'
import { Comment, List } from 'antd';


export default class CommentList extends Component {
    render() {
        return (
            <div>
                 <List
                            className="comment-list"
                            header={`${this.state.data.length} replies`}
                            itemLayout="horizontal"
                            dataSource={this.state.data}//这里的数据源处理一下以后尝试自动生成帖子                    
                            renderItem={item => (
                            <li>
                                <Comment
                                className='middle'
                                actions={ [<span key="comment-list-reply-to-0" onClick={submitComment}>Reply to</span>]}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                />
                            </li>
                            )}
                        />
            </div>
        )
    }
}




  
function submitComment(){
    console.log("yes")
  }