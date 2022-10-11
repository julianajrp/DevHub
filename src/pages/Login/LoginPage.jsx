import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { InputDefault } from "../../components/NotFoundStyledComponent/InputsComponents";
import {
  BtnNegativo,
  BtnPrimario,
} from "../../components/NotFoundStyledComponent/ButtonsComponents";
const LoginPage = ({ setAuthentication, setUser, setModulo, toast }) => {
  const navigate = useNavigate();

  const logSchema = yup.object().shape({
    email: yup.string().email().required("Required field"),
    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logSchema),
  });

  const goToRegister = () => {
    navigate("/register");
  };

  const logIn = (user, event) => {
    event.preventDefault();
    console.log({ ...user });
    axios
      .post(`https://kenziehub.herokuapp.com/sessions`, { ...user })
      .then((res) => {
        console.log(res);

        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        setAuthentication(true);
        setUser(res.data.user.name);
        setModulo(res.data.user.course_module);
        toast.success("Login succeeded!");
        setTimeout(() => navigate(`/dashboard/${res.data.user.name}`), 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error has occurred, try again!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="mainContainer">
      <p className="LogoTitle">Dev Hub</p>
      <div className="containerForm">
        <h1 className="Title1 colorWhite">Login</h1>
        <form className="Form FormLogin" onSubmit={handleSubmit(logIn)}>
          <div className="labelDiv">
            <label className="Headline colorNormal labels">Email</label>
            <InputDefault
              type="text"
              className="inputs"
              placeholder="Type your email"
              {...register("email")}
            />
            <p className="errorMessage">{errors.email?.message}</p>
          </div>
          <div className="labelDiv">
            <label className="Headline colorNormal labels">Password</label>
            <input
              type="password"
              className="inputDefault inputs"
              placeholder="Type your password"
              {...register("password")}
            />
            <p className="errorMessage">{errors.password?.message}</p>
          </div>
          <BtnPrimario type="submit">Login</BtnPrimario>
          <span className="Headline colorGrey clicable" onClick={goToRegister}>
            Doesn't have an account yet?
          </span>
          <BtnNegativo className="btnNegativo" onClick={goToRegister}>
            Register Page
          </BtnNegativo>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
