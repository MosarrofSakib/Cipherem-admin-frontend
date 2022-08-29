import React, { useState } from "react";
import "./sendmail.css";
import Main from "../Main/main";
import { Usertoken } from "../../service/Utils/User";
import axios from "axios";
import { Base_URL } from "../../service/Auth/AuthService";

const SendMail = () => {
  const token = Usertoken();
  const [templateId, setTemplateId] = useState("");

  const handleSendMail = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
    };
    console.log(templateId);
    axios.post(
      Base_URL + "/mail/sendmail",
      {
        templateId: templateId,
      },
      config
    );
    alert("Mail sent successfully!");
  };
  return (
    <Main>
      <div className="mail-back">
        <h1>Send Mail with sendinblue template</h1>
        <form className="mail-main" onSubmit={() => handleSendMail()}>
          <input
            className="mail-input"
            type="text"
            value={templateId}
            placeholder="Enter the template number..."
            onChange={(e) => setTemplateId(e.target.value)}
          />
          <button type="submit" className="btn-sendmail">
            Send Mail
          </button>
        </form>
      </div>
    </Main>
  );
};

export default SendMail;
