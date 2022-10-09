import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const DashboardPage = ({ setUser, user, modulo, toast }) => {
  // const params = useParams();
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    setUser("");
    toast.warn("Going back to Login Page");
    setTimeout(() => navigate("/"), 2000);
  };
  return (
    <div className="containerDashboard">
      <div className="containerTop headerBtn">
        <h1 className="LogoTitle">Dev Hub</h1>
        <button className="btnNegativo btnSair" onClick={logOut}>
          LogOut
        </button>
      </div>
      <div className="containerLine1">
        <h3 className="Title1">Hello, {user} </h3>
        <span className="HeadlineBold colorGrey">{modulo}</span>
      </div>
      <div className="containerContent">
        <h3 className="Title1">Too bad! We're still in development :/ </h3>
        <p className="Title3">Soon we'll add new features!</p>
      </div>
    </div>
  );
};

export default DashboardPage;
