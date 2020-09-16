import React, { Component } from 'react'
import { Input } from 'antd';
import { withRouter } from 'react-router-dom'

class EasySearchFrame extends Component {
    constructor(props){
        super(props);
        // this.setState={
        //     searchWord:this.props.location.state.keyWord
        // }
    }

    render() {
        const { Search } = Input;
        var searchWord=this.props.location.state.keyWord;
        console.log(searchWord)
        // this.props.location.state.dotData
        return (
            <div style={{marginLeft: '22%'}}>
                <Search
                    placeholder="搜搜看你感兴趣的内容吧～"
                    value={searchWord}
                    onSearch={value => console.log(value)}
                    style={{ width: '68%'}}
                    allowClear 
                    //accesskey="s"
                />
            </div>
        )
    }
}
export default withRouter(EasySearchFrame);