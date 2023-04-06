import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import Elements from "@mui/icons-material/Widgets";
import Forms from "@mui/icons-material/BrandingWatermark";
import ChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LayoutIcon from "@mui/icons-material/Dashboard";

import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="" alt="" />
          <h1>Vertlix</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebaricon"
          onClick={() => closeSidebar()}
        >
        </i>
      </div>

      <div className="sidebar__menu">
  <h2>Main</h2>
  {[
    {
      icon: <HomeIcon />,
      title: "Dashboard",
      link: "#",
    },
    {
      icon: <CalendarMonthIcon />,
      title: "Calendar",
      link: "#",
    },
    {
      icon: <EmailIcon />,
      title: "Email",
      link: "#",
      dropdown: true,
      dropdownLinks: [
        {
          title: "Inbox",
          link: "#",
        },
        {
          title: "Sent",
          link: "#",
        },
        {
          title: "Drafts",
          link: "#",
        },
      ],
    },
  ].map((item, index) => (
    <div className="sidebar__link" key={index}>
      <i>{item.icon}</i>
      <a href={item.link}>{item.title}</a>
      {item.dropdown && (
        <div className="sidebar__dropdown-content">
          {item.dropdownLinks.map((link, linkIndex) => (
            <a href={link.link} key={linkIndex}>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  ))}

  <h2>Components</h2>
  {[
    {
      icon: <Elements />,
      title: "UI Elements",
      link: "#",
    },
    {
      icon: <Forms />,
      title: "Forms",
      link: "#",
    },
    {
      icon: <ChartIcon />,
      title: "Charts",
      link: "#",
    },
  ].map((item, index) => (
    <div className="sidebar__link" key={index}>
      <i>{item.icon}</i>
      <a href={item.link}>{item.title}</a>
    </div>
  ))}

  <h2>Leave</h2>
  {[
    {
      icon: <TableChartIcon />,
      title: "Tables",
      link: "#",
    },
    {
      icon: <AddLocationIcon />,
      title: "Maps",
      link: "#",
    },
    {
      icon: <LayoutIcon />,
      title: "Layouts",
      link: "#",
    },
  ].map((item, index) => (
    <div className="sidebar__link" key={index}>
      <i>{item.icon}</i>
      <a href={item.link}>{item.title}</a>
    </div>
  ))}
</div>

    </div>
  );
};

export default Sidebar;
