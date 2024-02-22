import React from "react";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import GetMatchedButton from "../../../components/GetMatchedButton";

const PersonalLoanFees = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"-10px"
  };

  const LeftTypographyStyle = {
    color: "#404040",
    fontSize: { xs: "16px", sm: "20px" },
    fontWeight: "900",
    fontFamily: "Inter",
  };

  return (
    <>
      <Box bgcolor="#FCEFB8">
        <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
          <Grid
            container
            bgcolor="#FCEFB8"
            spacing={2}
            sx={{ padding: { xs: "16px", sm: "32px" } }}
          >
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "20px", sm: "20px" },
                    fontFamily: "Inter",
                    fontWeight: "300",
                    margin: { xs: "0px 0px 25px" },
                  }}
                >
                  Following are the different charges applicable on a personal
                  loan:
                </Typography>

                <List>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Processing fee
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Verification charge
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Goods and Service Tax
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Penal interest
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Part-prepayment and foreclosure charge
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Documentation charge
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Stamp duty
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <FiberManualRecord sx={{ ...CircleIcon }} />
                    <Typography sx={{ ...LeftTypographyStyle }}>
                      Credit administration fee
                    </Typography>
                  </ListItem>
                </List>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                >
                  Note: The charges of personal loan may vary across our
                  lenders.
                </Typography>
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px" },
                    fontWeight: "400",
                    fontFamily: "Inter",
                    margin: { xs: "0px 0px 30px" },
                  }}
                >
                  Before accepting the personal loan offer, you should ideally
                  carefully check these fees.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: { xs: "center", sm: "flex-end" },
                justifyContent: { xs: "center", sm: "center" },
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: { lg: "60%" },
                  textAlign: { xs: "center", sm: "left" },
                  paddingLeft:{sm:"5%"}
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "24px", sm: "40px" },
                    fontFamily: "Inter",
                    margin: "0px 0px 10px",
                    color: "#243771",
                    fontWeight: "900",
                    lineHeight: { sm: "1.1" },
                    // margin:"0 0 32px"
                  }}
                >
                  Personal Loan Fees And Charges
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
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
    </>
  );
};

export default PersonalLoanFees;
