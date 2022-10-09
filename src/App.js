import "./App.css";
import RegisterPage from "./pages/Register/RegisterPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import LoginPage from "./pages/LoginPage";
// import DashboardPage from "./pages/DashboardPage";

function App() {
  const [authentication, setAuthentication] = useState(false);
  const [user, setUser] = useState("");
  const [modulo, setModulo] = useState("");
  const baseUrl = "https://kenziehub.herokuapp.com";
  return (
    <>
      <ToastContainer
        position={"top-right"}
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setAuthentication={setAuthentication}
              setModulo={setModulo}
              setUser={setUser}
              toast={toast}
            />
          }
        />
        <Route
          path="/register"
          element={<RegisterPage baseUrl={baseUrl} toast={toast} />}
        />
        <Route
          path="/dashboard/:name"
          element={
            <DashboardPage
              user={user}
              modulo={modulo}
              baseUrl={baseUrl}
              setUser={setUser}
              toast={toast}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
