import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { Grid } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Grid sx={{ paddingTop: { xs: "56px", sm: "64px" } }}>
        <Outlet />
      </Grid>
      <Footer />
    </>
  );
};

export default Layout;
