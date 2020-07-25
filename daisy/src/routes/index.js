import AdminIndex from "../pages/admin/adminIndex";
import CompManagement from "../pages/admin/compManagement";
import DealReport from "../pages/admin/dealReport";
import UserManagement from "../pages/admin/userManagement";
import PageNotFound from "../pages/pageNotFound";

export const mainRoutes = [{
    path: '/404',
    component: PageNotFound
}]

export const adminRoutes = [{
    path: "/admin",
    component: AdminIndex
},
{
    path: "/admin/comp",
    component: CompManagement
},
{
    path: "/admin/dealreport",
    component: DealReport
},
{
    path: "/admin/usermanagement",
    component: UserManagement
}]