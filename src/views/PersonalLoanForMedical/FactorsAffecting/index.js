import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";

const FactorsAffecting = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    // marginRight: ".5vmax",
    position: "absolute",
    top: "15px",
    left: "0",
  };

  const TypographySubHeadings = {
    color: "#404040",
    fontWeight: "900",
    fontSize: { xs: "16px", sm: "20px" },
    fontFamily: "Inter,sans-serif",
  };
  return (
    <Box>
      <Container
        maxWidth={"xl"}
        sx={{
          padding: "60px 0px 50px",
          // backgroundColor:"gray"
        }}
      >
        <Grid
          container
          alignItems={"center"}
          // spacing={2}
          sx={{ padding: { xs: "20px", md: "48px" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={5}
            xl={5}
            sx={{
              // padding: "0px 10px 0px",
              display: "flex",
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: { lg: "100%", xl: "100%" } }}>
              <Typography
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "24px", sm: "32px", xl: "40px" },
                  fontFamily: "Inter",
                  color: "#243771",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  margin: { xs: "0px 0px 23px" },
                }}
              >
                Factors Affecting Personal Loan EMI
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "16px", sm: "20px", xl: "18px" },
                  fontFamily: "Inter",
                  color: "#404040",
                  // fontWeight: "900",
                  lineHeight: { xs: "1.1", xl: "1.5" },
                  margin: { xs: "0px 0px 27px" },
                }}
              >
                Take a look at these factors that play a significant role in
                determining your EMI amount:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "center", sm: "flex-start" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                  margin: "0px 0px 20px",
                  // padding: { xl: "0px 96px 0px" },
                }}
              >
                <GetMatchedButton />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            // spacing={2}
            xs={12}
            sm={6}
            md={8}
            lg={7}
            xl={7}
            //   xl={9}
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              listStyle: "none",
              // marginLeft: "0",
              // paddingLeft: "0",
              // padding: "0px 10px 0px",
              textAlign: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <List>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />

                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                      fontWeight: "300",
                    }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ ...TypographySubHeadings }}
                    >
                      Repayment Tenure:{" "}
                    </Typography>{" "}
                    The loan repayment tenure you choose is inversely
                    proportional to your EMI amount. This means the lower the
                    repayment tenure, the higher the EMI amount, and vice-versa.
                    Thus, you might find that having a longer loan tenure is
                    more convenient. However, interest outgo is higher for a
                    longer loan tenure.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />

                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                      fontWeight: "300",
                    }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ ...TypographySubHeadings }}
                    >
                      Principal Amount:{" "}
                    </Typography>{" "}
                    The principal amount that your lender approves depends on
                    various factors, such as your credit score, repayment
                    history, your relationship with the lender, etc. Also, the
                    higher the principal amount, the higher the EMI. So, make
                    your decisions carefully and within your capabilities.
                  </Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecord sx={{ ...CircleIcon }} />

                  <Typography
                    sx={{
                      marginLeft: "10px",
                      fontFamily: "Inter,sans-serif",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#404040",
                      fontWeight: "300",
                    }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ ...TypographySubHeadings }}
                    >
                      Rate of Interest{" "}
                    </Typography>{" "}
                    The EMI is directly proportional to the interest rate. In
                    the case of personal loans, the rate of interest depends
                    mostly on the borrower's creditworthiness. If your
                    creditworthiness sounds promising to the lender, they will
                    sanction your loan at the lowest rate of interest possible.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FactorsAffecting;
