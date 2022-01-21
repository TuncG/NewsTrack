// core components
// admin pages
// // // // // admin dashboards
// // // // // admin tables
/* import Tables from "views/admin/Tables/Tables.js";
import Sortable from "views/admin/Tables/Sortable.js";
import ReactBSTable from "views/admin/Tables/ReactBSTable.js";
// // // // // admin maps
import Google from "views/admin/Maps/Google.js";
import Vector from "views/admin/Maps/Vector.js"; */
// // // // // admin rest
/* import Widgets from "views/admin/Widgets.js";
import Charts from "views/admin/Charts.js";
import Calendar from "views/admin/Calendar.js"; */

// auth pages

// @material-ui/icons components
/* import BubbleChart from "@material-ui/icons/BubbleChart";
 */ import Dns from "@material-ui/icons/Dns";
/* import Event from "@material-ui/icons/Event";
/* import Map from "@material-ui/icons/Map";
import Palette from "@material-ui/icons/Palette"; */
import House from "@material-ui/icons/House";
import ListAlt from "@material-ui/icons/ListAlt";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Palette from "@material-ui/icons/Palette";

import PermMedia from "@material-ui/icons/PermMedia";
import Microsoft from "pages/Microsoft";
import Apple from "pages/Apple";
import Facebook from "pages/Facebook";
import Dashboard from "pages/DashboardPage";
import Tesla from "pages/Tesla";
import Google from "pages/Google";
import Login from "views/auth/Login";

var routes = [
  {
    divider: true,
  },

  {
    path: "/pages/DashboardPage",
    name: "Dashboard",
    icon: House,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/pages/microsoft",
    name: "Microsoft",
    icon: PermMedia,
    iconColor: "Warning",
    component: Microsoft,
    layout: "/admin",
  },
  {
    path: "/pages/apple",
    name: "Apple",
    icon: Dns,
    iconColor: "Default",
    component: Apple,
    layout: "/admin",
  },
  {
    path: "/pages/Facebook",
    name: "Facebook",
    icon: ListAlt,
    iconColor: "ErrorLight",
    component: Facebook,
    layout: "/admin",
  },
  {
    path: "/pages/Tesla",
    name: "Tesla",
    icon: WidgetsIcon,
    iconColor: "Success",
    component: Tesla,
    layout: "/admin",
  },
  {
    path: "/pages/Google",
    name: "Google",
    icon: Palette,
    iconColor: "Error",
    component: Google,
    layout: "/admin",
  },
  {
    path: "/views/login",
    name: "login",
    icon: Dns,
    iconColor: "Default",
    component: Login,
    layout: "/admin",
  },

  /* {
    collapse: true,
    name: "Tables",
    icon: Toc,
    iconColor: "Default",
    state: "tablesCollapse",
    views: [
      {
        path: "/tables",
        name: "Tables",
        miniName: "T",
        component: Tables,
        layout: "/admin",
      },
      {
        path: "/sortable",
        name: "Sortable",
        miniName: "S",
        component: Sortable,
        layout: "/admin",
      },
      {
        path: "/react-bs-table",
        name: "React BS Table",
        miniName: "R",
        component: ReactBSTable,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    icon: Map,
    iconColor: "Primary",
    state: "mapsCollapse",
    views: [
      {
        path: "/maps",
        name: "Google",
        miniName: "G",
        component: Google,
        layout: "/admin",
      },
      {
        path: "/vector",
        name: "Vector",
        miniName: "V",
        component: Vector,
        layout: "/admin",
      },
    ],
  } */
  /* {
    path: "/widgets",
    name: "Widgets",
    icon: WidgetsIcon,
    iconColor: "Success",
    component: Widgets,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: PieChart,
    iconColor: "Info",
    component: Charts,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: Event,
    iconColor: "Error",
    component: Calendar,
    layout: "/admin",
  }, */
  /*  {
    divider: true,
  },
  {
    title: "Documentation",
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
    name: "Getting started",
    icon: FlashOn,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
    name: "Foundation",
    icon: Palette,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
    name: "Components",
    icon: Dns,
  },
  {
    href: "https://www.creative-tim.com/learning-lab/material-ui/google-maps/argon-dashboard?ref=admui-admin-sidebar",
    name: "Plugins",
    icon: BubbleChart,
  }, */
];
export default routes;
