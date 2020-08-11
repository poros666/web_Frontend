//import AdminIndex from "../pages/admin/adminIndex";
import CompManagement from "../pages/admin/compManagement";
import DealReport from "../pages/admin/dealReport";
import UserManagement from "../pages/admin/userManagement";
import PageNotFound from "../pages/pageNotFound";
import Homepage from "../pages/homepage";
import Post from "../pages/findteam/PostPage";
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
import UserTeam from "../pages/personal/userTeam"
import UserComp from "../pages/personal/userComp"
import UserColle from "../pages/personal/userColle"
import UserInform from "../pages/personal/userInform"
import UserPost from "../pages/personal/userPost"
import Editinform from "../pages/personal/editInform"

import SearchPage from "../pages/search/searchPage";
import SearchResult from "../pages/search/searchResult";

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
    component: PageNotFound
},
{
    path: "/home",
    title: "主页",
    component: Homepage
},

{
    path: "/post",
    title: "post",
    component: Post
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
    path: "/Community",
    title: "社区",
    component: Community
},
{
    path: "/ReadPost/:id",
    title:"社区动态",
    component: ReadPost
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
    path: "/editinform",
    title: "编辑个人资料",
    component: Editinform
}]


export const messageRoutes = [{
    path: "/message/system",
    title: "系统公告",
    component: SystemNotice
},
{
    path: "/message/comp",
    title: "比赛通知",
    component: CompNotice
},
{
    path: "/message/reply",
    title: "回复我的",
    component: Reply
},
{
    path: "/message/letter",
    title: "私信",
    component: PrivateLetter
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
    title: "队伍",
    component: UserTeam
},
{
    path: "/personal/comp",
    title: "比赛",
    component: UserComp
},
{
    path: "/personal/colle",
    title: "收藏",
    component: UserColle
},
{
    path: "/personal/inform",
    title: "资料",
    component: UserInform
},
{
    path: "/personal/post",
    title: "发布",
    component: UserPost
}]
