import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <Sidebar />
      <div className="logincontainer">
        <Navbar />
        hello
      </div>
    </div>
  );
};

export default Login;
