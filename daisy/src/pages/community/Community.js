import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import CreatePost from '../../components/community/CreateMoment'
import {Space,Button} from 'antd';
import 'antd/dist/antd.css';
import TurnPage from '../../components/comm/TurnPage'
import PostList from '../../components/community/MomentList'
//import Test from '../../components/community/Test'

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

 
    //组件功能实现

    createPost(title,content){

      //传递json到服务端
      console.log(title)
      console.log(content)
    }

    sortByTime(){
      console.log('sortByTime')
    }

    sortByLike(){
      console.log('sortByLike')
    }

    sortByComments(){
      console.log('sortByComments')
    }

    sortByFavorites(){
      console.log('sortByFavorites')
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

                        {
                          //这里比较简单就直接写死在html里面，不做额外的子组件了
                        }
                        <Space>
                            <p>sort by:</p>       
                          <Button type="primary" onClick={sortByTime}>time</Button>
                          <Button type="primary" onClick={sortByLike}>like</Button>
                          <Button type="primary" onClick={sortByComments}>comments</Button>
                          <Button type="primary" onClick={sortByFavorites}>Favorites</Button>     
                        </Space>


                        <br/>
                        <br/>

                        <PostList/>
                            


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




function sortByTime(){
  console.log('sortByTime')
}

function sortByLike(){
  console.log('sortByLike')
}

function sortByComments(){
  console.log('sortByComments')
}

function sortByFavorites(){
  console.log('sortByFavorites')
}








  
