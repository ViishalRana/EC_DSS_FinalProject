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
import CompanyDetails from "views/CompanyDetails/CompanyDetails.js";
import Company from "views/Company/Company.js";
import Rounds from "views/Rounds/Rounds.js";
import ViewStudents from "views/ViewStudents/ViewStudents.js";
import ChangePassword from "views/ChangePassword/ChangePassword.js";
import Logout from "views/Logout/Logout.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/company",
    name: "Company Details",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: CompanyDetails,
    layout: "/admin"
  },
  {
    path: "/rounds",
    name: "Company Rounds",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Rounds,
    layout: "/admin"
  },
  {
    path: "/viewStudents",
    name: "View Students",
    rtlName: "الرموز",
    icon:"View",
    component: ViewStudents,
    layout: "/admin"
  },
  {
    path: "/ChangePassword",
    name: "CHANGE PASSWORD",
    rtlName: "خرائط",
    icon: "Password",
    component: ChangePassword,
    layout: "/admin"
  },
  {
    path: "/logout",
    name: "LOGOUT",
    rtlName: "إخطارات",
    icon: "Logout",
    component: Logout,
    layout: "/admin"
  }
];

export default dashboardRoutes;
