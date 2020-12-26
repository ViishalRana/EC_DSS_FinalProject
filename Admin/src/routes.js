/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import FinalPlacement from "views/TableList/FinalPlacement.js"
import DoubleOffers from "views/TableList/DoubleOffers.js"
import A1Offers from "views/TableList/A1Offers.js"
import AOffers from "views/TableList/AOffers.js"
import SIOffers from "views/TableList/SIOffers.js"
import SummerInternship from "views/TableList/SummerInternship.js"
import Companies from "views/TableList/Companies.js";
import OEP from "views/TableList/OEP.js";


import Lock from "@material-ui/icons/Lock";
import List from "@material-ui/icons/List";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import AdminDashboard from "views/Dashboard/adminDashboard.js";
import SpcMembers from "views/TableList/spcMembers.js"

import ChangePassword from "views/UserProfile/ChangePassword.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: AdminDashboard,
    layout: "/admin",

  },
  {
    path: "/changePassword",
    name: "Change Password",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Lock,
    component: ChangePassword,
    layout: "/admin",
  },
  // {
  //   path: '/student',
  //   name: 'Student',
  //   icon: Person,
  //   layout: '/admin',
  //   subItems:[
  //     {
  //       path: "/student/finalPlacement",
  //       name: "Final Placement",
  //       icon: List,
  //       component: FinalPlacement,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/student/doubleOffers",
  //       name: "Double Offers",
  //       icon: List,
  //       component: FinalPlacement,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/student/A1Offers",
  //       name: "A1 Offers",
  //       icon: List,
  //       component: FinalPlacement,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/student/AOffers",
  //       name: "A Offers",
  //       icon: List,
  //       component: FinalPlacement,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/student/summerInternship",
  //       name: "Summer Internship",
  //       icon: List,
  //       component: FinalPlacement,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/student/summerOffers",
  //       name: "Summer Offers Details",
  //       icon: List,
  //       component: FinalPlacement,
  //       layout: "/admin"
  //     },

  //   ],
  // }
  ,
  
      {
        path: "/finalPlacement",
        name: "Final Placement",
        icon: List,
        component: FinalPlacement,
        layout: "/admin"
      },
      {
        path: "/doubleOffers",
        name: "Double Offers",
        icon: List,
        component: DoubleOffers,
        layout: "/admin"
      },
      {
        path: "/A1Offers",
        name: "A1 Offers",
        icon: List,
        component: A1Offers,
        layout: "/admin"
      },
      {
        path: "/AOffers",
        name: "A Offers",
        icon: List,
        component: AOffers,
        layout: "/admin"
      },
      {
        path: "/summerInternship",
        name: "Summer Internship",
        icon: List,
        component: SummerInternship,
        layout: "/admin"
      },
      {
        path: "/summerOffers",
        name: "Summer Offers Details",
        icon: List,
        component: SIOffers,
        layout: "/admin"
      },
  {
    path: "/companies",
    name: "Companies",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Companies,
    layout: "/admin"
  },
  {
    path: "/spc-members",
    name: "SPC Members",
    icon: "content_paste",
    component: SpcMembers,
    layout: "/admin"
  },
  {
    path: "/open_edit_period",
    name: "Open Edit Period",
    icon: "",
    component: OEP,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
