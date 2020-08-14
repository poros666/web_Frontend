import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Carousel, Card} from 'antd';
import './activityShow.css'

const { Header,Footer, Content } = Layout;
const contentStyle = {
    color: '#fff',
    height:'40px',
  };

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
        title: 'Find thousands of extensions, plug-ins, scripts'
    },
    {
        Uid:123,
        Pid:23,
        imgSrc:'actPic3',
        title: 'language for background applications'
    },
    {
        Uid:124,
        Pid:24,
        imgSrc:'actPic4',
        title: 'applications, is refined by Ant UED Team'
    },
    {
        Uid:125,
        Pid:25,
        imgSrc:'actPic5',
        title: 'Ant Design, a design language for'
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
             <div style={{height: '400px',margin:'10px 10px'}}>
                <Layout>
                    <Content>
                        <Carousel 
                            // effect="fade" 
                        >
                            {this.state.slides.map(function(slide){
                                return(
                                    <div key={slide}
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <a href={"#/ReadPost/"+slide.Uid} target="_blank" rel="noopener noreferrer">
                                            <img 
                                                height={370}
                                                width={450}
                                                src={require("../../img/activity/"+slide.imgSrc+".jpg")}
                                            />
                                            <div style={{
                                                    position: 'absolute', bottom:'50px',
                                                    fontSize:20,
                                                    color:'white',
                                                    // textAlign: 'center',
                                                    // verticalAlign:'middle',
                                                    // margin:'0,auto',
                                            }}>
                                                <p>
                                                    {slide.title}
                                                </p>
                                            </div>
                                        </a>
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