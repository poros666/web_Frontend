import React, { Component } from 'react'
import ReportButton from './ReportButton'
import { Comment } from 'antd';
import Loading from './Loading';
import CONSTURL from './config';
import Axios from 'axios';
import Avatar from 'antd/lib/avatar/avatar';
import moment from 'moment'

export default class Reply extends Component {

    constructor(props){
        super()

   //     console.log(props)

        const sourceData = [
            {
              "Icon":"",
              "Account":"",
              "Nickname":"",
              "ReplyId":0,
              "Content":"",
              "Time":""
            }
          ];
        this.state={
            data:sourceData,
            Rid:props.replyId,
            isLoading:true
        }
    }

    componentDidMount(){

        var url=CONSTURL.hosturl+CONSTURL.GetReplyList+this.state.Rid
      //  console.log(url)
        Axios.get(url).then((res)=>{
            var temp=res.data
            for(var i=0;i<temp.length;i++){
                temp[i].Time=this.deleteLetter(temp[i].Time)
            }
            this.setState({data:temp})
            this.setState({isLoading:false})
        })
    }

    deleteLetter(str) {

        var result;
      
        var reg = /[a-zA-Z]+/;  //[a-zA-Z]表示匹配字母，g表示全局匹配
      
        while (result = str.match(reg)) { //判断str.match(reg)是否没有字母了
      
          str = str.replace(result[0], ' '); //替换掉字母  result[0] 是 str.match(reg)匹配到的字母
      
        }
        return str;
      }

    render() {
     //   console.log(this.state)
        var objArr=this.state.data
        return (
            this.state.isLoading?<Loading/>:
            <div>
                { 
                    objArr.map((item,index)=>(
                        <li key={item+index}>
                            <Comment
                                className='middle'
                                actions={ 
                                    [
                                    <>
                                        <ReportButton
                                          ReportUID={this.state.Rid} 
                                          ReporterUID='test2' 
                                          Time={moment().format("YYYY-MM-DDTHH:mm:ssC")}
                                          ContentType="reply"
                                      />
                                    </>,
                                    ]}
                                author={item.Nickname}
                                avatar={<Avatar
                                    src={item.Icon}
                                />}
                                content={item.Content}
                                datetime={item.Time}
                            >
                            </Comment>
                        </li>
                    ))

                }
            </div>
        )
    }
}



