import { Routes, Route } from "react-router-dom";
import { InventoryPage } from "../pages/inventory";
import { OrdersPage }  from "../pages/orders";
import { PosPage } from "../pages/pospage";
import { Home } from "../pages/home";
import { ForgotPassword } from "../auth/ForgotPassword";
import { Login } from "../auth/Login";
import { ResetPassword } from "../auth/ResetPassword";
import { Signup } from "../auth/Signup";

export function PagesRoutes(){
  return(
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pos" element={<PosPage/>} />
      <Route path="/inventory" element={<InventoryPage/>} />
      <Route path="/orders" element={<OrdersPage/>} />
      <Route path="/home" element={<Home/>} />

      // authentication
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/ResetPassword" element={<ResetPassword/>} />
      <Route path="/Signup" element={<Signup/>} />
     </Routes>
    </>
  )
}