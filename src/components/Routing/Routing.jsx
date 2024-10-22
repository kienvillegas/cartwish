import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Home/HomePage";
import ProductsPage from "../Products/ProductsPage";
import SingleProduct from "../SingleProduct/SingleProduct";
import CartPage from "../Cart/CartPage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import LoginPage from "../Authentication/LoginPage";
import SignUpPage from "../Authentication/SignUpPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/product/1" element={<SingleProduct />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/myorder" element={<MyOrderPage />}></Route>
    </Routes>
  );
};

export default Routing;
