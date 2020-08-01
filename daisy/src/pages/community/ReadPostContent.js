import React, { Component } from 'react'
import Post from '../../components/community/Post'
import ToComment from '../../components/community/ToComment'
import 'antd/dist/antd.css';
import { Comment, Avatar,Tooltip, List } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../../style/comm/comm.css'
//两边的宽度啊什么的之后再说好了，调

export default class ReadPostContent extends Component {
    render() {//有很多评论内容
        return (
            <div className='Body'>  
                <div className='middle'>
                    <Post/>
                    <ToComment/>
                    {
                        //这个tocomment是之后要用来输入回复的，然后点击下面的Reply也要能够自动跳出来这样的一个框
                    }

                    {
                    //                    <Comment/>
                    }
                    {
                        //我还不知道怎么做哪个自动的分级
                    }
                    <List
                        className="comment-list"
                        header={`${data.length} replies`}
                        itemLayout="horizontal"
                        dataSource={data}//这里的数据源处理一下以后尝试自动生成帖子                    
                        renderItem={item => (
                        <li>
                            <Comment
                            className='middle'
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                            />
                        </li>
                        )}
                    />,
                    


                    <ExampleComment>
                        <ExampleComment>
                            <ExampleComment />
                            <ExampleComment />
                        </ExampleComment>
                    </ExampleComment>,
                </div>
            </div>
        )
    }
}






const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<p>Han Solo</p>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

//这里的data以后用来接受数据 自动生成
//可能需要再里面嵌套回复
const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
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
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
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