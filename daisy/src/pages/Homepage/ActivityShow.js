import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Carousel} from 'antd';
import './activityShow.css'

const { Header,Footer, Content } = Layout;
const contentStyle = {
    color: '#fff',
    height:'40px',
};
  
function limitTxt(txt,count) {
    var str = txt;
    if(txt.length>count){
        str = str.substr(0,count) + '...' ;
    }
    return str;
}

var sourceData = [
    {
        Uid:121,
        Pid:21,
        imgSrc:'actPic1',
        title: '一文看懂前端和后端开发:从入门到放弃'
    },
    {
        Uid:122,
        Pid:22,
        imgSrc:'actPic2',
        title: '世界银行称穷人需要钱'
    },
    {
        Uid:123,
        Pid:23,
        imgSrc:'actPic3',
        title: '男子坚持偷窃十年 只为加入监狱合唱团'
    },
    {
        Uid:124,
        Pid:24,
        imgSrc:'actPic4',
        title: '牛人用砖头造一辆“宝马”车，宝马公司一看乐了：送你辆真的'
    },
    {
        Uid:125,
        Pid:25,
        imgSrc:'actPic5',
        title: '机会来了！最便宜的兰博基尼，价格一出引起全场骚动'
    },
]
class ActivityShow extends Component {

    constructor(props){
        super(props)

        this.state={
            slides:sourceData
        }
    }

    render() { 

        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return ( 
             <div style={{height: '100%', margin:'10px 10px'}}>
                <Layout>
                    <Content>
                        <Carousel 
                            // effect="fade" 
                        >
                            {this.state.slides.map(function(slide){
                                return(
                                    <div key={slide}>
                                        {/* <a href={"#/ReadPost/"+slide.Uid} target="_blank" rel="noopener noreferrer"> */}
                                               <img 
                                                width='auto'
                                                height='100%'
                                                src={require("../../img/activity/"+slide.imgSrc+".jpg")}
                                                // src={"../../img/activity/"+slide.imgSrc+".jpg"}
                                                /> 
                                            <div style={{
                                                    position: 'absolute', 
                                                    bottom:'50px',
                                                    fontSize:20,
                                                    color:'white',
                                                    // textAlign: 'center',
                                                    // left:'10px',
                                            }}>
                                                {limitTxt(slide.title,20)}
                                            </div>
                                        {/* </a> */}
                                        <div style={contentStyle}></div> 
                                    </div>
                                )
                            })
                            }
                        </Carousel>
                    </Content>
                    <Header style={{height: '30px'}}>
                    </Header>
                </Layout>
            </div>
         );
    }
}
 
export default ActivityShow;