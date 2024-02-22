import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import whyshouldyouconsiderimg from "../../../assets/images/PersonalLoanForTravelImages/whyshouldyouconsiderimg.webp";
import GetMatchedButton from "../../../components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";

const WhyShouldYouConsider = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"5px"
  };
  return (
    <Box>
      <Grid container bgcolor="#FCEFD8" >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "20px 32px 20px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              // margin: {
              //   xs: "0% 0% 5%",
              //   sm: "10% 5% 10%",
              //   lg: "15% 0% 10%% 10%",
              //   xl: "15% 10% 0% 10%",
              // },
              // padding: { sm: "48px 16px 0px 48px", xl: "0px 0px 48px" },
              width: { md: "80%" },
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
              Why Should You Consider Availing a Travel Loan?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "20px", lg: "20px" },
                fontWeight: "400",
                fontFamily: "Inter,sans-serif",
                color: "#404040",
                margin: { xs: "0px 0px 24px", lg: "0px 0px 30px" },
                textAlign: { xs: "center", sm: "left" },
                lineHeight: "1.5",
              }}
            >
              Travelling requires only two of your most important things in life
              – your time and money. We can manage the latter one for you. But
              now that you are on our page, you must have been thinking back and
              forth before applying for a personal loan for travel. Let us give
              you some good reasons that might convince you:
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
                  The primary reason would be not liquidating your other savings
                  or long-term investments.
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
                  Instant approval and quick disbursal so that you don’t need to
                  postpone your plan further due to unavailability of funds.
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
                  Flexibility in repayment terms and conditions.
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
                  You can also use the extra line of credit for emergency
                  purposes while on vacation if required.
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
                  You can monitor your travel expenses and refrain from
                  overspending.
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
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: { xs: "16px 32px 32px", sm: "0" },
            display: "flex",
            alignItems: { xs: "center" },
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Box
          >
            <img
              src={whyshouldyouconsiderimg}
              alt="loading"
              width={"100%"}
              //   style={{ width: "100%",height:"auto"}}
              // style={{borderStyle: "none",
              //     height: "auto",
              //     maxWidth: "100%"}}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyShouldYouConsider;
