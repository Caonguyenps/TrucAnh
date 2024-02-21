import React from "react";
import FooterComponents from "../components/Footer/Footer.components";
import HeaderComponents from "../components/Header/Header.components";
import ClientRoutes from "../routes/ClientRoutes";

export default function MainLayout() {
  return (
    <>
      <HeaderComponents />
      <ClientRoutes />
      <FooterComponents />
    </>
  );
}
