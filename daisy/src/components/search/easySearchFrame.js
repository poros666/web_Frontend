import React, { Component } from 'react'
import { Input } from 'antd';
<<<<<<< HEAD
import { withRouter,location } from 'react-router-dom'

class EasySearchFrame extends Component {
    constructor(props){
        super(props);
        this.State={
            // searchWord:this.props.location.state.keyWord
            searchScope:'',
            searchWord:'',
        }
    }
    // componentDidMount() {
    //     console.log("新打开窗口，下面是传递过来的参数");
    //     debugger
    //     // 从ocation中取出search
    //     let search = this.props.history.location.search
    //     // TODO 调试完毕以后需要在这里增加判断，如果该参数为空则非正常途径进入需要跳转到账单主页
    //     // 这里是因为默认前面有一个?,切掉
    //     search = search.substr(1,search.length);
    //     // 因为传递的有中文，所以此处需要decodeURI进行URL解码
    //     const searchObj:searchWord = JSON.parse(decodeURI(search));
    //     console.log(searchObj);
    //     // 将处理完毕的数据更新至state，并渲染到页面
    //     this.setState({
    //         searchWord:searchObj
    //     })
    // }
    onKeywordChange(e){
        this.setState({
            searchWord: e.target.value
        })
    }
    onSearchKeyword(value){
        console.log(value)
        console.log(value.length)
        var keyWord=''
        if(value.length == 0){
            window.open('#/search')
        }
        else{
            this.props.history.push({
                pathname: `/searchResult/all`, 
                // search: JSON.stringify(value),
                search: 'keyword='+String(value),
                state: {keyWord:this.state.searchWord},
            });
        }
    }
    render() {
        const { Search } = Input;
        // var searchWord=this.props.location.state.keyWord;
        // console.log(searchWord)
        console.log(this.props.history.location.Search)
=======
import { Link } from 'react-router-dom'

const { Search } = Input;

const onChange = e => {
    console.log(e);
    };
    
export default class EasySearchFrame extends Component {

    keyDown(e){
        if(e.keyCode === 13){
        }
    }

    searchJump(value){
        console.log(value)
        var w=window.open('about:blank')
        w.location.href="#/searchResult/type=mixed"+this.props.keyword
    }
    
    render() {

>>>>>>> zhw
        return (
            <div style={{marginLeft: '22%'}}>
                <Search
                    placeholder="搜搜看你感兴趣的内容吧～"
<<<<<<< HEAD
                    // value={searchWord}
                    onChange={e => this.onKeywordChange(e)}
                    onSearch={value => this.onSearchKeyword(value)}
=======

                    onSearch={value => this.searchJump(value)}
                    onKeyDown={e=>this.keyDown(e)}
                    onChange={onChange}

>>>>>>> zhw
                    style={{ width: '68%'}}
                />
            </div>
        )
    }
}
export default withRouter(EasySearchFrame);