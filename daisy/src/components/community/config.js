const CONSTURL={
    hosturl:'http://fwdarling2020.cn:8080',
    GetMomentList:'/api/Moment?OrderBy=',
    GetMomentCount:'/api/Moment/count',
    CreatMoment:'/api/Moment',
    GetMoment:'/api/Momment/',
    CreateComment:'/api/Comment',
    CreateReply:'/api/Reply',
    GetCommentList:'/api/Comment?MomentId=',
    GetReplyList:'/api/Reply?CommentId=',
    LikeMoment:'/api/LikeMoment',
    StarMoment:'/api/MomentStar',
   // local:'http://localhost:3000/#/'
    local:'',

    getHotSearch:'/Project/Random',
    searchUser:'/Users?Name=',
    searchComp:'/Project/search?name=',
    searchComm:'/Moment/search?name=',

    getCompNotice:'/api/Notification/',
    //比赛通知
    getTeamMessage:'/api/User/GroupMessage/',
    //队伍消息
    getReply:'/api/User/Reply/',
    //回复我的
    getApply:'/api/Application?ProjectId=[]&GroupId=[]',
    //获取队伍申请列表（组队申请）
    getSystemNotice:'/api/Notice',
    //系统公告

    //私信未做
}

export default CONSTURL