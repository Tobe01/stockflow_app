import { Routes, Route } from "react-router-dom";
import { InventoryPage } from "../pages/inventory";
import { OrdersPage }  from "../pages/orders";
import { PosPage } from "../pages/pospage";

export function PagesRoutes(){
  return(
    <>
     <Routes>
      <Route path="/" element={<PosPage />} />
      <Route path="/pos" element={<PosPage/>} />
      <Route path="/inventory" element={<InventoryPage/>} />
      <Route path="/orders" element={<OrdersPage/>} />
     </Routes>
    </>
  )
}