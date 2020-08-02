import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import CreatePost from '../../components/community/CreatePost'
import {Space,Button} from 'antd';
import 'antd/dist/antd.css';
import TurnPage from '../../components/comm/TurnPage'
import PostList from '../../components/community/PostList'



export default class Community extends Component {
    constructor(props){
        super(props)
 //       console.log('载入data数据')
      //改为数据请求
      
      //再这里绑定元数据
      this.createPost=this.createPost.bind(this)
    }
    // componentWillMount(){
    // }

    componentDidMount(){
 //     console.log('componentDidMount')
    }

    createPost(title,content){
      console.log(title)
      console.log(content)
    }
    

    render() {
//        console.log('mounting')
        return (

        
            <div >
                <HeaderNav/>
                <FloatHelper/>


                {
                    //本体
                }



                    <div style={{padding:'0 50px'}}>


                        <SortPost/>
                        <br/>
                        <br/>

                        <PostList/>
                            

                        <TurnPage/>       


                        <CreatePost
                          createPost={this.createPost}
                        />


                    </div>                





                
                {
                    //本体
                }    



                <Footer/>
            </div>
        )
    }
}


function SortPost() {
    return (
      <Space>
          <p>sort by:</p>       
        <Button type="primary">time</Button>
        <Button type="primary">like</Button>
        <Button type="primary">comments</Button>
        <Button type="primary">Favorites</Button>     
      </Space>
    );
  }






  