import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import '../../style/comm/comm.css'
import Post from '../../components/community/Post'
import ToComment from '../../components/community/ToComment'
import 'antd/dist/antd.css';
import { Comment, Avatar,Tooltip, List } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import '../../style/comm/comm.css'


export default class ReadPost extends Component {
    constructor(props){
      super(props)
      this.state={
        data:getData()
       }
    }


    componentDidMount(){
//      console.log(this.props)
      let tempId=this.props.match.params.id
 //     console.log(tempId)
      this.setState(
        {
          id:tempId
        }
      )
      //至此为止我们接收到了冬天传过来了id，接着就是根据id取到值


    }

    render() {
        return (
            <div className='backcolor'>
                <HeaderNav/>
                <FloatHelper/>
                {
                    //本体
                }
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
                            header={`${this.state.data.length} replies`}
                            itemLayout="horizontal"
                            dataSource={this.state.data}//这里的数据源处理一下以后尝试自动生成帖子                    
                            renderItem={item => (
                            <li>
                                <Comment
                                className='middle'
                                actions={ [<span key="comment-list-reply-to-0" onClick={submitComment}>Reply to</span>]}
                                author={item.author}
                                avatar={
                                  item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                                />
                            </li>
                            )}
                        />,
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

  


  function getData(){
    //这里应该要从远端获取这里先随便写一个
    return sourceData
  }


  
function submitComment(){
  console.log("yes")
}