import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CreditRatingImg from "../../../assets/images/CreditScoreImages/credit-rating-green-table-pen-coffee-calculator (1).png";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";

const CreditRating = () => {
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
          bgcolor="#FDF8E3"
      >
        <Grid
          item
          xs={12}
          sm={6}
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
              src={CreditRatingImg}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ padding: { xs: "16px", sm: "0" } }}
        >
          <Box
            sx={{
              margin: {
                sm: "10% 5% 10%",
                lg: "15% 0% 0% 10%",
                xl: "15% 25% 0% 10%",
              },
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
              What Is Credit Score?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                fontFamily: "Inter,sans-serif",
                color: "#243771",
                margin: "0px 0px 24px",
                textAlign: { xs: "center", sm: "left" },
                // padding: {
                //   sm: "0rem 3rem 0rem 0rem",
                //   lg: "0rem 6rem 0rem 0rem",
                //   xl: "0rem 11rem 0rem 0rem",
                // },
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
              A "credit score" is a concise number that reflects your borrowing
              history and helps lenders judge your creditworthiness. Usually
              ranging from 300 to 900, higher scores indicate better borrowing
              habits and increase your chances of loan approvals. A score of
              750+ is preferred, but 700+ can work for credit cards. Late
              payments dent your score, while consistent, timely payments
              enhance it, shaping a healthier financial profile.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "left" },
                justifyContent: { xs: "center", sm: "left" },
                // margin:{sm:"0% 33% 0% 0%",md:"0% 50% 0% 0%",lg:"0% 65% 0% 0%"}
              }}
            >
              <GetFreeCreditButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CreditRating;
