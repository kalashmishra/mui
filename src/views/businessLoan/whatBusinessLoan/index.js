import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import debtconsolidationloan from "../../../assets/images/PersonalLoanForDebtImages/DebtConsolidationLoanimg.png";
import GetMatchedButton from "../../../components/GetMatchedButton";
import WhatBusinessLoanImg from "../../../assets/images/BusinessLoanImages/what_are_BusinessLoan.png";

const WhatBusinessLoan = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
        bgcolor="#FCEFD8"
      >
        <Grid
          item
          xs={12}
          sm={6}
          bgcolor="#FCEFD8"
          sx={{ padding: { xs: "10px 16px 0px", sm: "0" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: { sm: "40% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
            }}
          >
            <img
              alt="loading"
              style={{ width: "100%" }}
              src={WhatBusinessLoanImg}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          bgcolor="#FCEFD8"
          sx={{ padding: { xs: "16px", sm: "0" } }}
        >
          <Box
            sx={{
              margin: {
                sm: "10% 5% 10%",
                lg: "15% 0% 0% 10%",
                xl: "15% 25% 0% 10%",
              },
              paddingRight:"20px"
              // display:"flex",
              // flexDirection:"column",
              // alignItems:{xs:"center",sm:"left"},
              // justifyContent:"center"
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "28px", lg: "38px" },
                fontWeight: "900",
                fontFamily: "Inter,sans-serif",
                color: "#243771",
                margin: { xs: "0px 0px 12px", lg: "0px 0px 28px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.1",
              }}
            >
              What are Business Loans?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: "0px 0px 24px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.7",
                fontWeight: "300",
              }}
            >
              A business loan is a type of unsecured credit instrument that
              business owners can apply for in order to fund planned as well as
              urgent business-related expenses.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: "0px 0px 24px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.7",
                fontWeight: "300",
              }}
            >
              Further, leading financial institutions and NBFCs offer business
              loans at competitive interest rates and do not demand any
              collateral against the borrowed sum.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "left" },
                justifyContent: { xs: "center", sm: "left" },
                // margin:{sm:"0% 33% 0% 0%",md:"0% 50% 0% 0%",lg:"0% 65% 0% 0%"}
              }}
            >
              <GetMatchedButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WhatBusinessLoan;
