//
// made by ykn
//
import React, { Component } from 'react'
import Footer from '../../components/comm/Footer'
import HeaderNav from '../../components/comm/HeaderNav'
import FloatHelper from '../../components/comm/FloatHelper'
import 'antd/dist/antd.css';
import MomentList from '../../components/community/MomentList'
import CreateMoment from '../../components/community/CreateMoment'
import moment from 'moment'
import Axios from 'axios';
import CONSTURL from '../../components/community/config';
import '../../style/community/community.css'

export default class Community extends Component {
    constructor(props){
        super(props)
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

    createMoment(title,content){

      //传递json到服务端
      var t=moment().format('YYYY-MM-DDTHH:mm:ssC')  //    console.log(title)
   //   console.log(content)

      var json=
        {
          'Account':'ddd',
          'Title':title,
          'Time':t,
          'Content':content
        }
      
        console.log(json)
      var url=CONSTURL.hosturl+CONSTURL.CreatMoment
        

      Axios.post(url,json).then((res)=>{
        console.log(res)
        window.location.reload()

      })

    }






    
    

    render() {
//        console.log('mounting')
        return (

        
            <div >
                <HeaderNav/>
                <div style={{height:'80px'}}/>
                <FloatHelper/>


                {
                    //本体
                }



                    <div className='MomentList'>

                        {
                          //这里比较简单就直接写死在html里面，不做额外的子组件了
                        }



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











  
