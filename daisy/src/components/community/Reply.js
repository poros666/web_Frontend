import React, { Component } from 'react'
import ReportButton from './ReportButton'
import { Comment } from 'antd';
import Loading from './Loading';
import CONSTURL from './config';
import Axios from 'axios';
import Avatar from 'antd/lib/avatar/avatar';

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
            this.setState({data:res.data})
            this.setState({isLoading:false})
        })
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
                                        <ReportButton/>
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



