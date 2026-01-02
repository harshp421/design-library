import { IconAlert, IconAlerts, IconAnalytics, IconApiReferenceDoc, IconComplainBordered, IconDashboard, IconDevices, IconDisplays, IconHelp, IconIssues, IconLocation, IconReports, IconTable, IconUsersPlus } from "$lib/icons";
import IconSettings from "$lib/icons/icon-settings.svelte";

export default class APP_CONSTS {
  static ROUTES = {
    USER: "/user", 
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    OVERVIEW:'/overview',
    DASHBOARD:'/dashboard',
    ANALYTICS:'/analytics',
     DISPLAY: "/display",
     REPORTS:'/reports',
     TABLES:'/tables',
     ALERTS:'/alerts',
     COMPLAINES:'/complaines',
     ISSUES:'/issues',
    DEVICES:'/devices',
    THEME:'/theme',
  };
}
export const NAV_PRIMARY = [
  { title: "overview", url: APP_CONSTS.ROUTES.OVERVIEW, icon: IconLocation },
  { title: "dashboard", url: APP_CONSTS.ROUTES.DASHBOARD, icon: IconDashboard },
  { title: "analytics", url: APP_CONSTS.ROUTES.ANALYTICS, icon: IconAnalytics },
  { title: "display", url: APP_CONSTS.ROUTES.DISPLAY, icon: IconDisplays },
  { title: "reports", url: APP_CONSTS.ROUTES.REPORTS, icon: IconReports },
  { title: "tables", url: APP_CONSTS.ROUTES.TABLES, icon: IconTable },
  { title: "alerts", url: APP_CONSTS.ROUTES.ALERTS, icon: IconAlerts },
  { title: "complains", url: APP_CONSTS.ROUTES.COMPLAINES, icon: IconComplainBordered},
  { title: "issues", url: APP_CONSTS.ROUTES.ISSUES, icon: IconIssues},
  { title: "devices", url: APP_CONSTS.ROUTES.DEVICES, icon: IconDevices },
];
export const NAV_SECONDARY = [
   { title: "Settings", url: "/settings", icon: IconSettings },
        {
            title: "API Reference",
            url: "/api-reference",
            icon: IconApiReferenceDoc,
        },
        {
            title: "knowledge Base",
            url: "/knowledge-base",
            icon: IconHelp,
        }
]


export const DEVICE_TYPES = ['Pollusense','Dustroid','Polludrone','Odusense','Weather Com','AQ Bot']