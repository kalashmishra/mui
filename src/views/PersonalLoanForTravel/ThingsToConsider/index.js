import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import thingstoconsiderimg from "../../../assets/images/PersonalLoanForTravelImages/thingstoconsiderimg.png";
import { FiberManualRecord } from "@mui/icons-material";
import GetMatchedButton from "../../../components/GetMatchedButton";

const ThingsToConsider = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"-10px"
  };

  return (
    <Box>
      <Container
        sx={{
          display: {
            xs: "block",
            padding: "60px 0px 50px",
            //   backgroundColor: "gray",
          },
        }}
        maxWidth={"xl"}
      >
        <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              // padding: "0px 10px 0px 20px",
              //    backgroundColor: "pink"
              display: "flex",
              alignItems: "center",
              justifyContent: {xs:"center",sm:"flex-start"},
            }}
          >
            <Box sx={{padding:{xl:'50px'}}}>
              <img
                src={thingstoconsiderimg}
                alt="why to get a personal loan for medical emergencies"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              padding: "0px 10px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "24px", sm: "30px" },
                  fontFamily: "Inter",
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: { xs: "1.3", md: "1.1", lg: "1.5" },
                  margin: "0px 0px 24px",
                }}
              >
                Things To Consider Before Applying For Travel Loans
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "18px" },
                  fontFamily: "Inter",
                  color: "#404040",
                  // fontWeight: "900",
                  lineHeight: { xs: "1.3", md: "1.1", lg: "1.5" },
                  margin: "0px 0px 24px",
                }}
              >
                Although these facilities and flexibilities might seem tempting,
                you should be careful while applying for a travel loan. After
                all, you will need to pay off the debt through travel loan EMIs.
              </Typography>
              <Typography
                sx={{
                  textAlign: { sm: "left" },
                  fontSize: { xs: "18px" },
                  fontFamily: "Inter",
                  color: "#404040",
                  // fontWeight: "900",
                  lineHeight: { xs: "1.3", md: "1.1", lg: "1.5" },
                  margin: "0px 0px 24px",
                }}
              >
                Check out the following pointers that you should consider before
                applying for a travel loan online:
              </Typography>
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#404040",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  >
                    Draft your repayment plan beforehand and budget accordingly.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#404040",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  >
                    You might need to pay foreign currency conversion fees.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#404040",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  >
                    As travel loans are one type of personal loan, the travel
                    loan interest rates are higher. So, compare and choose the
                    most suitable option for you.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />
                  <Typography
                    sx={{
                      color: "#404040",
                      fontSize: { xs: "16px", sm: "18px" },
                      fontFamily: "Inter",
                      fontWeight: "400",
                    }}
                  >
                    Use an online EMI calculator to find out your travel loan
                    EMI estimates and check if it fits within your monthly
                    expenditures.
                  </Typography>
                </ListItem>
              </List>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThingsToConsider;
