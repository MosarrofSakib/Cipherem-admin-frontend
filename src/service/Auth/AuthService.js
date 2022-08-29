import axios from "axios";

export const Base_URL = "https://node.cipherem.com";

/* http://localhost:8000
https://node.cipherem.com
*/
export const login = async (email, password) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await axios.post(
    Base_URL + "/admin/login",
    {
      email: email,
      password: password,
    },
    config
  );
  console.log(response);

  const token = response.data.token;
  if (token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return {};
  }
  return JSON.parse(user);
};
