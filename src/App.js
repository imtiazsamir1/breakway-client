import "./App.css";
import Navber from "./Components/Home/Navber";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router";
import SignUp from "./Components/Login/SignUp";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AddProduct from "./Components/AddProduct/AddProduct";
import AllProduc from "./Components/AllProduct/AllProduc";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="addproduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>{" "}
        <Route
          path="allproduct"
          element={
            <RequireAuth>
              <AllProduc></AllProduc>
            </RequireAuth>
          }
        ></Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
