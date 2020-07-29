import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class CommunityShow extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ height: '800px' , margin:'40px 150px' }}>
                <Layout>
                    <Layout>
                        <Header>
                            <div  color='white'>
                            <li>社区    换一换  更多</li>
                            </div>

                        </Header>
                        <Content>社区展示页面</Content>
                        {/* <Footer>Footer</Footer> */}
                    </Layout>

                    <Sider>
                        <li>社区排行榜</li>
                    </Sider>
                </Layout>
            </div>
         );
    }
}
 
export default CommunityShow;