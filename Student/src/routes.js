// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Company from "views/Company/Company.js";
import UpdateResume from "views/UpdateResume/UpdateResume.js";
import MyPerformance from "views/MyPerformance/MyPerformance.js";
import ChangePassword from "views/ChangePassword/ChangePassword.js";
import Logout from "views/Logout/Logout.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/Profile",
    name: "PROFILE",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/student"
  },
  {
    path: "/Companies",
    name: "COMPANIES",
    rtlName: "قائمة الجدول",
    icon: "COMPANY",
    component: Company,
    layout: "/student"
  },
  {
    path: "/Resume",
    name: "UPDATE RESUME",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: UpdateResume,
    layout: "/student"
  },
  {
    path: "/My_stats",
    name: "MY PERFORMANCE",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: MyPerformance,
    layout: "/student"
  },
  {
    path: "/ChangePassword",
    name: "CHANGE PASSWORD",
    rtlName: "خرائط",
    icon: "Password",
    component: ChangePassword,
    layout: "/student"
  },
  {
    path: "/logout",
    name: "LOGOUT",
    rtlName: "إخطارات",
    icon: "Logout",
    component: Logout,
    layout: "/student"
  }
];

export default dashboardRoutes;
