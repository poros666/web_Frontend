import AdminIndex from "../pages/admin/adminIndex";
import CompManagement from "../pages/admin/compManagement";
import DealReport from "../pages/admin/dealReport";
import UserManagement from "../pages/admin/userManagement";
import PageNotFound from "../pages/pageNotFound";
import Homepage from "../pages/homepage";
import PostPage from "../pages/findteam/PostPage";
import ReadPost from "../pages/community/ReadPost"
import FindTeam from "../pages/findteam/FindTeam";
import Community from "../pages/community/Community";
import CompetitionPage from "../pages/competition/competitionPage";
import SearchCompetitionPage from "../pages/competition/searchCompetitionPage";

import MessageIndex from "../pages/message/messageIndex";
import Reply from "../pages/message/reply";
import CompNotice from "../pages/message/compNotice";
import Apply from "../pages/message/apply";
import SystemNotice from "../pages/message/systemNotice";
import TeamMessage from "../pages/message/teamMessage";
import PrivateLetter from "../pages/message/privateLetter";
import PersonalCenter from "../pages/personal/personalSpace";
import MyTeam from "../pages/personal/myTeam"
import MyComp from "../pages/personal/myComp"
import MyColle from "../pages/personal/myColle"
import SearchPage from "../pages/search/searchPage";
import SearchResult from "../pages/search/searchResult";
import Login from "../pages/login";
import Register from "../pages/register";
import SearchContent from "../components/search/searchContent";
import SearchContentComp from "../components/search/searchContentComp";
import SearchContentComm from "../components/search/searchContentComm";
import SearchContentUsr from "../components/search/searchContentUsr";

export const adminRoutes = [{
    path: "/admin/comp",
    title: "比赛管理",
    component: CompManagement
},
{
    path: "/admin/dealreport",
    title: "处理举报",
    component: DealReport
},
{
    path: "/admin/usermanagement",
    title: "用户管理",
    component: UserManagement
},
]

export const mainRoutes = [{
    path: '/404',
    component: PageNotFound},
{
    path: "/home",
    title: "主页",
    component: Homepage
},

{
    path: "/postpage",
    title: "寻找队伍帖",
    component: PostPage
},
{
    path: "/readPost",
    title: "动态",
    component: ReadPost
},
{
    path: "/findTeam",
    title: "寻找队伍",
    component: FindTeam
},
{
    path: "/community",
    title: "社区",
    component: Community
},
{
    path: "/compPage/:compID",
    title: "比赛页面",
    component: CompetitionPage
},
{
    path: "/searchCompPage",
    title: "寻找队伍",
    component: SearchCompetitionPage
},
{
    path: "/search",
    title: "搜索页面",
    component: SearchPage
},
{
    path: "/searchResult",
    title: "搜索结果页面",
    component: SearchResult
},
{
    path: "/login",
    title: "登录",
    component: Login
},
{
    path: "/register",
    title: "注册",
    component: Register
}
]

export const searchRoutes = [
{
    path: "/searchResult/type=mixed",
    title: "综合",
    component: SearchContent
},
{
    path: "/searchResult/type=comp",
    title: "比赛",
    component: SearchContentComp
},
{
    path: "/searchResult/type=comm",
    title: "社区",
    component: SearchContentComm
},
{
    path: "/searchResult/type=usr",
    title: "用户",
    component: SearchContentUsr
}
]

export const messageRoutes = [
{
    path: "/message/comp",
    title: "比赛通知",
    component: CompNotice
},
{
    path: "/message/system",
    title: "系统公告",
    component: SystemNotice
},
{
    path: "/message/letter",
    title: "私信",
    component: PrivateLetter
},
{
    path: "/message/reply",
    title: "回复我的",
    component: Reply
},
{
    path: "/message/team",
    title: "队伍消息",
    component: TeamMessage
},
{
    path: "/message/apply",
    title: "组队申请",
    component: Apply
}]

export const personalRoutes = [{
    path: "/personal/team",
    title: "我的队伍",
    component: MyTeam
},
{
    path: "/personal/comp",
    title: "我的比赛",
    component: MyComp
},
{
    path: "/personal/colle",
    title: "我的收藏",
    component: MyColle
}]