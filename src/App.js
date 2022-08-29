import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/Context";
import Dashboard from "./Page/Dashboard/Dashboard";
import UserAll from "./Page/User/UserAll";
import UserPending from "./Page/User/PendingUsers";
import UserApproved from "./Page/User/AprevedUsers";
import SendMail from "./Page/SendEmail/SendMail";
import Login from "./Page/Login/Login";
import CreateAdmin from "./Page/CreateAdmin/CreateAdmin";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserAll />} />
        <Route path="/users/pending" element={<UserPending />} />
        <Route path="/users/approved" element={<UserApproved />} />
        <Route path="/sendmail" element={<SendMail />} />
        <Route path="/craeteAdmin" element={<CreateAdmin />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
