import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import girlimg from "../../../assets/images/CredmudraPageImages/responsible-img.webp";
import GetMatchedButton from "../../../components/GetMatchedButton";

const ResponsibleCredit = () => {
  return (
    <Box sx={{ marginTop: { xs: "10%", md: "0" } }}>
      <Container maxWidth="xl" sx={{ paddingLeft: { md: "7%" } }}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                // md: "flex-end",
                lg: "flex-start",
                xl: "flex-end",
              },
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#243771",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "24px", xl: "50px" },
                  fontFamily: "Inter",
                  fontWeight: "900",
                  margin: "0 0 25px",
                  lineHeight: "1.1",
                }}
              >
                Responsible Credit Redefined:
              </Typography>
              <Typography
                sx={{
                  color: "#243771",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "18px",
                  fontFamily: "Inter,sans-serif",
                  fontWeight: "300",
                  margin: "0 0 25px",
                  // lineHeight:"1.1"
                  maxWidth: "500px",
                }}
              >
                At Credmudra, responsible credit means more than just borrowing.
                We're your advocates, understanding your needs and matching you
                with the right financial products. Our commitment spans from
                financial literacy to timely issue resolution, ensuring you
                always have Link trusted partner by your side.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            // bgcolor={"gray"}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                paddingTop: { xs: "15%", sm: "5%", md: "0" },
              }}
            >
              <img
                style={{ width: "100%", height: "auto" }}
                src={girlimg}
                alt="match you with the right financial products."
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResponsibleCredit;
