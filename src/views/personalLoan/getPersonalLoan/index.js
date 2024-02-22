import { Box, Container, Typography } from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";

const GetPersonalLoan = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#243771",
        m: 0,
        minHeight: "550px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth={"xl"}>
        <Box sx={{ padding: { xs: "30px 10px", md: "32px" } }}>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "26px", sm: "40px", lg: "45px" },
              fontFamily: "Inter",
              fontWeight: "900",
              color: "#f7d64a",
              lineHeight: "1.5",
            }}
          >
            Get A Personal Loan Starting From As Low As
            <Typography
              component={"span"}
              sx={{
                color: "#7CB86D",
                fontSize: { xs: "26px", sm: "40px", lg: "45px" },
                fontFamily: "Inter",
                fontWeight: "900",
                lineHeight: "1.5",
                padding: "0px 0px 20px",
              }}
            >
              {" "}
              Rs.5,000
            </Typography>{" "}
            To A Maximum Of
            <Typography
              component={"span"}
              sx={{
                color: "#7CB86D",
                fontSize: { xs: "26px", sm: "40px", lg: "45px" },
                fontFamily: "Inter",
                fontWeight: "900",
                lineHeight: "1.5",
                padding: "0px 0px 20px",
              }}
            >
              {" "}
              Rs.10 Lakh
            </Typography>{" "}
            Through Credmudra!
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "17px", sm: "22px" },
              margin: "0px 0px 32px",
              color: "#FFFFFF",
              // padding:{sm:"1rem 1.5rem 1rem",sm:"0rem 1.5rem 0rem",xl:"0rem 4rem 0 4rem"},
              lineHeight: { xs: "1.7" },
            }}
          >
            Experience seamless borrowing with Credmudra! Instantly meet your
            credit needs with easy online applications, attractive interest
            rates, and minimum touchpoints. Sign up, get matched with a lender,
            and complete quick formalities for hassle-free disbursal.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GetMatchedButton backCol={"#d3b01b"} Col={"#243771"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GetPersonalLoan;
