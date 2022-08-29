import axios from "axios";
import { Base_URL } from "../Auth/AuthService";
import { Usertoken } from "./User";

const ApproveUser = async (id) => {
  const token = Usertoken();
  const config = {
    headers: {
      "Content-type": "application/json",
      "x-access-token": token,
    },
  };
  const response = await axios.post(
    Base_URL + "/admin/user/approve",
    {
      id: id,
    },
    config
  );
  console.log(response);
};

export default ApproveUser;
