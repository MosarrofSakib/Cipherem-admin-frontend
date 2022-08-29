import React, { useState, useEffect } from "react";
import UserMain from "./UserMain";
import { Usertoken } from "../../service/Utils/User";
import axios from "axios";
import { Base_URL } from "../../service/Auth/AuthService";

const UserAll = () => {
  const [datas, setDatas] = useState([]);
  const token = Usertoken();

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
    };
    axios.get(Base_URL + "/admin/user/all", config).then((res) => {
      console.log(res.data.data);
      const data = res.data.data;
      setDatas(data);
    });
  }, [token]);

  return <UserMain data={datas} />;
};

export default UserAll;
