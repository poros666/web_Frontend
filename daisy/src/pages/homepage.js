import {Layout, Menu, Breadcrumb} from 'antd'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import '../style/homepage.css'

const { Header, Content, Footer, Sider } = Layout;

class Homepage extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
 
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <div class='navigationBar'>
                    <li>navigationBar</li>
                </div>
                <div class='actComShow' >
                    <div class='activityShow'>
                        <li>activityShow </li>
                        <img src="../public/activityPicture.jpg" alt="该图片未加载成功"></img>
                    </div>

                    <div class='competitionShow'>
                        <button id='moreComp'>更多</button>
                        <button id='swapComp'>换一换</button>
                        <div class='clearFix'></div>

                        <div class='compList'>
                            <li>competition competition competition 1 </li>
                            <li>competition competition competition 2 </li>
                            <li>competition competition competition 3 </li>
                            <li>competition competition competition 4 </li>
                        </div>
                    </div>
                </div>

                <div class='clearFix'></div>
                
                <div class='communityShow'>
                    <li>communityShow </li>
                </div>

                <div class='clearFix'></div>

                <button id='helper'>Helper</button>
                <button id='back'>BackToTheTop</button>
            </div>
        )
    }
}

export default Homepage