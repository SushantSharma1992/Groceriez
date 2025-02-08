import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemFormPage from "../Components/Addform/AddItemFormPage";
import Header from "../Components/Header/Header";
import Menu from "../Components/Header/Menu";
import Cart from "../Pages/Cart";
import ErrorPage from "../Pages/ErrorPage";
import History from "../Pages/History";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Settings from "../Pages/Settings";
import { routerPath } from "./Urls";

export default function AppRoutes() {
  const RoutesList = () => (
    <Routes>
      <Route path={routerPath.products} element={<Products />} />
      <Route path={routerPath.cart} element={<Cart />} />
      <Route path={routerPath.settings} element={<Settings />} />
      <Route path={routerPath.history} element={<History />} />
      <Route path={routerPath.add} element={<AddItemFormPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <Header right={<Menu />}></Header>
      <RoutesList />
      <Home />
    </BrowserRouter>
  );
}
