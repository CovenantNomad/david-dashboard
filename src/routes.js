// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import ContactsIcon from '@material-ui/icons/Contacts';

// core components/views for Admin layout
// import DashboardPage from "./views/Dashboard/Dashboard.js";
import RegisterPage from "./views/RegisterUser/RegisterUser.js";
import AddressPage from "./views/TableList/TableList.js";



const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/user",
    name: "학생등록",
    icon: Person,
    component: RegisterPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "주소록",
    icon: ContactsIcon,
    component: AddressPage,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "공지사항",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
