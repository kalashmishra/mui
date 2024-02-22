import React from "react";
import eligibilitycriteria from "../../../assets/images/PersonalLoanForDebtImages/eligibilitycriteriaimg.png";
import { Box, Grid, Typography } from "@mui/material";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";

const WhyCredmydraGiving = () => {
  return (
    <>
      <Box
        sx={{
          background: "#243771",
          overflow: "hidden",
          padding: { xs: "40px 10px", sm: "80px 40px" },
          //   position: "relative",
        }}
      >
        <Grid container sx={{ padding: { xs: "10px", sm:'0' } }}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                color: "#fff",
                marginLeft: { md: "12%" },
                paddingRight: {  lg: "10%" },
                textAlign: { sm: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  color: "#f7d64a !important",
                  fontSize: { xs: "24px", md: "36px" },
                  fontWeight: "900",
                  marginBottom: "25px",
                  textAlign: { xs: "center", md: "left" },
                  lineHeight: "1.1",
                  fontFamily: "Inter",
                }}
              >
                Why Is Credmudra Giving Me My Credit Score For Free?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "17px", md: "20px" },
                  color: "#fff",
                  fontFamily: "Inter",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Credmudra provides your credit score for free because we believe
                in empowering individuals with financial knowledge and
                awareness. Understanding your credit score is crucial in making
                informed financial decisions. By offering this service at no
                cost, we aim to promote financial literacy and help you take
                charge of your financial well-being. We want to assist you in
                comprehending your creditworthiness so that you can navigate the
                world of credit confidently and responsibly.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                  marginTop: "20px",
                }}
              >
                <GetFreeCreditButton />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: { xs:"none", md: "flex" },
              justifyContent: "flex-start",
              alignItems: "center",
              paddingX:"50px"
            }}
          >
            <img
              src={eligibilitycriteria}
              alt="Credmudra logo"
              style={{
                left: "0",
                opacity: ".6",
                // position: "absolute",
                // top: "0",
                // paddingTop: "30px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyCredmydraGiving;
