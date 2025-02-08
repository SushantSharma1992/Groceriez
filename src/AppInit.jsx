import "./App.css";
import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import ItemsProvider from "./Context/ItemsProvider";

function AppInit() {
  return (
    <div className="App">
      <ItemsProvider>
        <AppRoutes />
      </ItemsProvider>
    </div>
  );
}

export default AppInit;
