//
// made by ykn
//
import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import 'antd/dist/antd.css'
import TurnPage from '../../components/comm/TurnPage'
import MomentList from '../../components/community/MomentList'
import CreateMoment from '../../components/community/CreateMoment'
import CONSTURL from '../../components/community/config'
import Axios from 'axios'
import moment from 'moment'
import { CustomerServiceTwoTone } from '@ant-design/icons'

export default class Community extends Component {
    constructor(props){
        super()
 //       console.log('载入data数据')
      //改为数据请求
      
      //再这里绑定元数据
      this.createMoment=this.createMoment.bind(this)
    }
    // componentWillMount(){
    // }

    componentDidMount(){
 //     console.log('componentDidMount')
    }

 
    //组件功能实现

    createMoment(tit,cont){

      var myDate=new Date();
      console.log(myDate.toLocaleTimeString())
      


      
      //  传递json到服务端
      var json=
      [
        {
          "Account":"account",
          "Title":tit,
          "Time":myDate.toLocaleTimeString(),
          "Content":cont
        }
      ]

      // var json=
      // [
      //   {
      //     "Account":"account",
      //     "Title":"tit",
      //     "Time":1,
      //     "Content":"cont"
      //   }
      // ]
      var url=CONSTURL.hosturl+CONSTURL.createMomentUrl
      Axios.post(url,json).then((res)=>{
        window.location.reload()
      })

    }





    
    

    render() {
//        console.log('mounting')
        return (

        
            <div >
                <HeaderNav/>
                <div style={{height:'50px'}}/>
                <FloatHelper/>


                {
                    //本体
                }



                    <div style={{padding:'0% 15% 5% 15%'}}>

                        {
                          //这里比较简单就直接写死在html里面，不做额外的子组件了
                        }
                        {/* <Space>
                            <p>sort by:</p>       
                          <Button type="primary" onClick={sortByTime}>time</Button>
                          <Button type="primary" onClick={sortByLike}>like</Button>
                          <Button type="primary" onClick={sortByComments}>comments</Button>
                          <Button type="primary" onClick={sortByFavorites}>Favorites</Button>     
                        </Space> */}


                        <br/>
                        <br/>

                        <MomentList/>
                            


                        <CreateMoment
                          createMoment={this.createMoment}
                        />

                        {/* <Test/> */}


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








  
