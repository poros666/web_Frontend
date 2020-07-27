import AdminIndex from "../pages/admin/adminIndex";
import CompManagement from "../pages/admin/compManagement";
import DealReport from "../pages/admin/dealReport";
import UserManagement from "../pages/admin/userManagement";
import PageNotFound from "../pages/pageNotFound";

export const mainRoutes = [{
    path: '/404',
    component: PageNotFound
}]

export const adminRoutes = [
{
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