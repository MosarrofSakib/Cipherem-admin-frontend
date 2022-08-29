export const Usertoken = () => {
  /* const {
    apiValue: { apiData, setApiData },
  } = UseAppContext(); */
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);
  const token = data.token;

  return token;
};
