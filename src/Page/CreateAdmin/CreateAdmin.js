import React, { useState } from "react";
import "./createAdmin.css";
import axios from "axios";
import { Base_URL } from "../../service/Auth/AuthService";
import Main from "../Main/main";
import { Usertoken } from "../../service/Utils/User";

const CreateAdmin = () => {
  const token = Usertoken();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAdmin = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
    };

    axios.post(
      Base_URL + "/admin/create-admin",
      {
        name: name,
        email: email,
        password: password,
      },
      config
    );
    alert("Admin created successfully!");
  };
  return (
    <Main>
      <div>
        <form className="admin-main" onSubmit={() => handleCreateAdmin()}>
          <h2>Create Admin</h2>
          <input
            className="mail-input"
            type="text"
            value={name}
            placeholder="Enter name..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mail-input"
            type="email"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mail-input"
            type="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-admin" type="submit">
            Create Admin
          </button>
        </form>
      </div>
    </Main>
  );
};

export default CreateAdmin;
