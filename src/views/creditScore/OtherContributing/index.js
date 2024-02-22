import { Box, Grid, List, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GetFreeCreditButton from "../../../components/GetFreeCreditButton";
import OtherContributingimg from "../../../assets/images/CreditScoreImages/othercontributingimg.png";

const OtherContributing = () => {
  return (
    <>
      <Grid
        container
        sx={{
          paddingY: "5%",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "10px 16px 0px", sm: "0" },
            display: "flex",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { sm: "7%" },
              //   padding: { sm: "20% 4% 10%", md: "10% 4% 10% 0%", lg: "0% 0%" },
            }}
          >
            <img
              alt="loading"
              style={{ width: "80%" }}
              src={OtherContributingimg}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ padding: { xs: "16px", sm: "0" } }}>
          <Box
            sx={{
              width: { xs: "100%", sm: "80%" },
            //   marginLeft: { xs: "0%", sm: "5%" },
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
              Other Contributing Factors:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#243771",
                margin: "0px 0px 20px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.7",
              }}
            >
              Besides the five major factors, other elements can influence your
              credit score, including:
            </Typography>
            <List sx={{ display: "flex", gap: "10px" }}>
              <TaskAltIcon
                sx={{ marginTop: { sm: "1px", md: "3px" }, color: "#10162C" }}
              />
              <Typography
                sx={{
                  color: "#243771",
                  fontWeight: "600",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                }}
              >
                Errors in your credit report :
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  {" "}
                  Ensure accuracy by checking your credit report regularly and
                  disputing any errors.
                </Typography>
              </Typography>
            </List>
            <List sx={{ display: "flex", gap: "10px" }}>
              <TaskAltIcon
                sx={{ marginTop: { sm: "1px", md: "3px" }, color: "#10162C" }}
              />
              <Typography
                sx={{
                  color: "#243771",
                  fontWeight: "600",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                }}
              >
                Sparse credit history :
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  {" "}
                  Limited credit history can hinder your score. Consider
                  building your credit with a secured credit card.
                </Typography>
              </Typography>
            </List>
            <List sx={{ display: "flex", gap: "10px" }}>
              <TaskAltIcon
                sx={{ marginTop: { sm: "1px", md: "3px", color: "#10162C" } }}
              />
              <Typography
                sx={{
                  color: "#243771",
                  fontWeight: "600",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                }}
              >
                Loan guarantor defaults :
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  {" "}
                  Defaulting on a loan guarantee can negatively impact your
                  score.
                </Typography>
              </Typography>
            </List>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#243771",
                margin: "0px 0px 20px",
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.7",
                paddingTop: "10px",
              }}
            >
              Understanding these factors empowers you to make informed
              decisions and optimize your credit score for better financial
              opportunities.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "left" },
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

export default OtherContributing;
