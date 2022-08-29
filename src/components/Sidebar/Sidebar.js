import React from "react";
import "./sidebar.css";
import { useLocation } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { HiUsers } from "react-icons/hi";
import {
  RiDashboardFill,
  RiUserSettingsFill,
  RiUserStarFill,
  RiAdminFill,
} from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";

import { UseAppContext } from "../../context/Context";

const Sidebar = () => {
  const {
    nav: { navActive, setNavActive },
  } = UseAppContext();

  const location = useLocation();

  const handleCloseSidebar = () => {
    setNavActive(false);
  };
  return (
    <>
      {navActive ? (
        <div className="sidebar-main">
          <div className="nav-open">
            <div className="sidebar-logo">Cipherem</div>
            <div className="nav-close">
              <IoMdClose onClick={handleCloseSidebar} />
            </div>
          </div>
          <div className="sidebar-items">
            <NavItem
              to="/dashboard"
              active={location.pathname === "/dashboard"}
              icon={<RiDashboardFill />}
              name="Dashboard"
            />

            <NavItem
              to="/users"
              active={location.pathname === "/users"}
              icon={<HiUsers />}
              name="All Users"
            />

            <NavItem
              to="/users/approved"
              active={location.pathname === "/users/approved"}
              icon={<RiUserStarFill />}
              name="Aproved Users"
            />

            <NavItem
              to="/users/pending"
              active={location.pathname === "/users/pending"}
              icon={<RiUserSettingsFill />}
              name="Pending Users"
            />

            <NavItem
              to="/sendmail"
              active={location.pathname === "/sendmail"}
              icon={<FaMailBulk />}
              name="Send Mail"
            />
            <NavItem
              to="/craeteAdmin"
              active={location.pathname === "/craeteAdmin"}
              icon={<RiAdminFill />}
              name="Create Admin"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
