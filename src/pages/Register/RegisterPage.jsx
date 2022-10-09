import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ baseUrl, toast }) => {
  const navigate = useNavigate();
  const goBackToLogin = () => {
    navigate("/");
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Required field"),
    email: yup.string().required("Required field").email("Invalid e-mail"),
    password: yup
      .string()
      .required("Required field")
      .min(8)
      .matches(RegExp("(.*[a-z].*)"), "Required lowercase")
      .matches(RegExp("(.*[A-Z].*)"), "Required uppercase")
      .matches(RegExp("(.*\\d.*)"), "Required number")
      .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Required special character"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Must be the same as the password")
      .required("Required field"),
    bio: yup.string(),
    contact: yup.string().required("Required field"),
    course_module: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendToApi = (data, event) => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/users`, data)
      .then((res) => {
        console.log(res);
        toast.success("Sucess register!");
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

    // setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="mainContainer">
      <div className="containerTop">
        <p className="LogoTitle">Dev Hub</p>
        <button className="btnNegativo voltar" onClick={goBackToLogin}>
          Back
        </button>
      </div>
      <div className="containerForm">
        <h1 className="Title1 colorWhite">Create account</h1>
        <span className="Headline colorGrey">Fast and free, let's go!</span>
        <form
          action=""
          onSubmit={handleSubmit(sendToApi)}
          className="Form FormRegister"
        >
          <div className="labelDiv">
            <label htmlFor="name" className="Headline colorNormal labels">
              Name
            </label>
            <input
              id="name"
              placeholder="Type your name"
              {...register("name")}
              className="inputDefault inputs"
            />
            <p className="errorMessage">{errors.name?.message}</p>
          </div>
          <div className="labelDiv">
            <label htmlFor="email" className="Headline colorNormal labels">
              Email
            </label>
            <input
              id="email"
              placeholder="Type your email"
              {...register("email")}
              className="inputDefault inputs"
            />
            <p className="errorMessage">{errors.email?.message}</p>
          </div>
          <div className="labelDiv">
            <label htmlFor="password" className="Headline colorNormal labels">
              Password
            </label>
            <input
              id="password"
              placeholder="Type your password"
              {...register("password")}
              className="inputDefault inputs"
              type="password"
            />
            <p className="errorMessage">{errors.password?.message}</p>
          </div>
          <div className="labelDiv">
            <label
              htmlFor="confirmPassword"
              className="Headline colorNormal labels"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirm_password")}
              className="inputDefault inputs"
            />
            <p className="errorMessage">{errors.confirm_password?.message}</p>
          </div>
          <div className="labelDiv">
            <label htmlFor="about" className="Headline colorNormal labels">
              Bio
            </label>
            <input
              id="about"
              placeholder="Talk about you"
              {...register("bio")}
              className="inputDefault inputs"
            />
            <p className="errorMessage">{errors.bio?.message}</p>
          </div>
          <div className="labelDiv">
            <label htmlFor="contact" className="Headline colorNormal labels">
              Contact
            </label>
            <input
              id="contact"
              placeholder="Contact option"
              {...register("contact")}
              className="inputDefault inputs"
            />
            <p className="errorMessage">{errors.contact?.message}</p>
          </div>
          <div className="labelDiv">
            <label className="Headline colorNormal" htmlFor="course_module">
              {" "}
              Select Module:
            </label>
            <select
              id="course_module"
              {...register("course_module")}
              className="inputDefault colorGrey select"
            >
              <option
                value="1o Module (An introduction to FrontEnd)"
                className="selectOptions"
              >
                First Module
              </option>
              <option
                value="2o Module (Advanced FrontEnd)"
                className="selectOptions"
              >
                Second Module
              </option>
              <option
                value="3o Module (An introduction to React)"
                className="selectOptions"
              >
                Third Module
              </option>
            </select>
          </div>
          <button type="submit" className="btnPrimario">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
