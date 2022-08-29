import "./dashboard.css";
import Main from "../Main/main";
import Card from "../../components/Card/Card";

import { HiUsers } from "react-icons/hi";
import {
  RiUserSettingsFill,
  RiUserStarFill,
  RiAdminFill,
} from "react-icons/ri";
import { FaMailBulk } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <Main>
        <div className="dashboard-main">
          <Card to="/users" Icon={<HiUsers />} title="All Users" />
          <Card
            to="/users/pending"
            Icon={<RiUserSettingsFill />}
            title="Pending Users"
          />
          <Card
            to="/users/approved"
            Icon={<RiUserStarFill />}
            title="Approved Users"
          />
          <Card to="/sendmail" Icon={<FaMailBulk />} title="Send Mail" />
          <Card to="/craeteAdmin" Icon={<RiAdminFill />} title="Create Admin" />
        </div>
      </Main>
    </div>
  );
};

export default Dashboard;
