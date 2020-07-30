import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Pagination } from 'antd';

const { Footer, Content } = Layout;

class ActivityShow extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{height: '400px',width:'400px',margin:'10px 10px'}}>
                <Layout>
                    <Content>
                    <img
                        width={272}
                        alt="logo"
                        src='.\communityPicture.jpg'
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