//日后补充：data来源和链接跳转的目标（该关键词的搜索结果）
//功能修改：热门搜索，运用随机获取15个比赛的那个接口

import React, { Component } from 'react'
import { List, Divider, Layout } from 'antd';
import { FireOutlined } from '@ant-design/icons';

import CONSTURL from '../../components/community/config';
import Axios from 'axios';
const { Content } = Layout;

export default class HotSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data:[]
        }
      }
    
    componentDidMount(){
    var url=CONSTURL.local+CONSTURL.getHotSearch
    Axios.get(url).then((res)=>{
        var result=res.data
        /*
        for(var i=0;i<result.length;i++){
        result[i].Time=this.deleteLetter(result[i].Time)
        }
        */
        this.setState({data:result})
        //  console.log(this.state.data)
    })
    }
    
    render() {
        //初始化render数组状态
        let objArr=this.state.data

        return (

            <div>
                <Layout className="hotSearchBox" style={{ width: '86%', margin: '5% 7%', padding: '0 20px' }}>
                    <Content style={{ padding: '0 5px' }}>
                        
                        <Divider orientation="left"><FireOutlined/>热门搜索</Divider>
                        
                        <List
                        grid={{ column: '4' }}
                        size='large'
                        dataSource={objArr}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href={"#/compPage/id="+item.projectId+'/'}>{item.name}</a>}
                                />
                            </List.Item>
                        )}
                        />
                    </Content>
                </Layout>              
            </div>

        )
    }
}