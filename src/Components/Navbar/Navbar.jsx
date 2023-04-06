import React from 'react';
import "./Navbar.css"
import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import navIcon from '@mui/icons-material/ClearAllRounded';
import Avatar from "../../images/avatar.png"

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
   <nav className='navbar'>
   <div className='nav_icon' onClick={()=> openSidebar()}>
    <i className='fa fa-bars'><navIcon /></i>
   </div>
   <div className='navbar__left'>
    <a className='active_link' href='#'>Admin</a>
   </div>
   <div className='navbar__right'>
   <a href='#'>
   <i className='fa fa-search'></i>
   </a>
   <a href='#'>
   <i className='fa fa-clock-o'></i>
   </a>
   <a href='#'>
   <img width="30" src={Avatar} alt="avatar"/>
   </a>
   </div>

   </nav>
  )
}

export default Navbar;
