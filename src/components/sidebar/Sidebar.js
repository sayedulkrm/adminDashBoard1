import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HubIcon from '@mui/icons-material/Hub';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";



const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}} >
                <span className="admin">ADMIN<span className="dashbord"> DASHBORD</span></span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}} >
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                </Link>

                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}} >
                    <li>
                        <GroupRoundedIcon className="icon" />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}} >
                    <li>
                        <CategoryRoundedIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <BorderColorIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <HubIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsSuggestIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})} ></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>


    </div>
)
}

export default Sidebar;