//import AdminIndex from "../pages/admin/adminIndex";
import CompManagement from "../pages/admin/compManagement";
import DealReport from "../pages/admin/dealReport";
import UserManagement from "../pages/admin/userManagement";
import PageNotFound from "../pages/pageNotFound";
import Homepage from "../pages/homepage";
import Post from "../pages/Post";
import FindTeam from "../pages/FindTeam";
import Community from "../pages/community/Community";
import CompetitionPage from "../pages/competition/competitionPage";
import SearchCompetitionPage from "../pages/competition/searchCompetitionPage";
import ReadPost from "../pages/community/ReadPost";


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
}]

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
    path: "/compPage",
    title: "比赛页面",
    component: CompetitionPage
},
{
    path: "/searchCompPage",
    title: "寻找队伍",
    component: SearchCompetitionPage
}]