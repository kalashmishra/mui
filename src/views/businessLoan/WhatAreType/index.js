import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import GetMatchedButton from "../../../components/GetMatchedButton";
import { FiberManualRecord } from "@mui/icons-material";
import WhatAreTypeimg from "../../../assets/images/BusinessLoanImages/what_are_bl_2.png";

const WhatAreType = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "15px",
    marginRight: "10px",
    // marginTop:"5px"
  };
  return (
    <Box>
      <Grid container bgcolor="#FCEFD8">
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
              What Are The Types Of Business Loans?
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
              Based on your requirement, you can opt for any of the following
              types of business loans:
            </Typography>
            <List>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  Term loan
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  Working capital loan
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  Bill or invoice discounting
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  Letter of credit
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  Point-of-Sale loan
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#404040",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                >
                  Overdraft
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
          <Box>
            <img
              src={WhatAreTypeimg}
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

export default WhatAreType;
