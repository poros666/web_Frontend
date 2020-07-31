import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Pagination } from 'antd';

const { Footer, Content } = Layout;

class ActivityShow extends Component {
    state = {  }
    render() { 
        return ( 
            // <div style={{height: '400px',width:'400px',padding:'10px 10px',margin:'10px 10px'}}>
            <div style={{height: '400px',margin:'10px 10px'}}>
                <Layout>
                    <Content>
                    <img
                        width={400}
                        height={300}
                        alt="logo"
                        src='./activityPicture_1.png'
                     />
                    </Content>
                    <Footer>
                        <Pagination size="small" total={50} /> </Footer>
                </Layout>                
            </div>
         );
    }
}
 
export default ActivityShow;