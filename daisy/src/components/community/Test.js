//
// made by ykn
//
//用来将在沙盒里面的数据再次实际运用


import React, { Component } from 'react'

import { Button } from 'antd';

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderAdComponent: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }
  
    onClickHandler() {
        this.setState({renderAdComponent: !this.state.renderAdComponent})
    }
  
    render() {
        return (
            <div>
                <Button onClick={this.onClickHandler}>
                    我是button
                    </Button>
                {this.state.renderAdComponent ? <AdComponent/> : null}
            </div>
        );
    }
}

function AdComponent(){
    return(
        <div>
            <p>我是内容</p>
        </div>
      
    )
}


