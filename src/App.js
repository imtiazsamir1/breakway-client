import logo from "./logo.svg";
import "./App.css";
import Navber from "./Components/Home/Navber";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router";
import SignUp from "./Components/Login/SignUp";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
