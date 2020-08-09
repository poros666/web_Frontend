import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Carousel, Card} from 'antd';

const { Header,Footer, Content } = Layout;
const { Meta,Grid } = Card;
const contentStyle = {
    color: '#fff',
    lineHeight: '40px',
  };

class ActivityShow extends Component {
    state = {  }
    render() { 
        return ( 
             <div style={{height: '400px',margin:'10px 10px'}}>
                <Layout>
                    <Content>
                        <Carousel effect="fade">
                            <div>
                                <img
                                    height={360}
                                    width={450}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <img 
                                    height={360}
                                    width={450}
                                    alt="example" 
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                                />
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <img
                                    height={360}
                                    width={450}
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <img
                                    height={360}
                                    width={450}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    title={<a href ={"#/personal"}>{"我的"}</a>}
                                />
                                <h3 style={contentStyle}>4</h3>
                            </div>
                            <div>
                                <img
                                    height={360}
                                    width={450}
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                                <h3 style={contentStyle}>5</h3>
                            </div>
                        </Carousel>
                    </Content>
                    <Header style={{height: '40px'}}>
                    </Header>
                </Layout>                
            </div>
         );
    }
}
 
export default ActivityShow;