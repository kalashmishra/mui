import React from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import GetMatchedButton from "../../../components/GetMatchedButton";

const EligibilityCriteria = () => {
  const CircleIcon = {
    color: "#F7D64A",
    fontSize: "10px",
    marginRight: "10px",
  };
  return (
    <Box
      sx={{
        background: "#243771",
        overflow: "hidden",
        padding: "65px 0",
        position: "relative",
      }}
    >
      <Grid container sx={{ padding: { xs: "20px", md: "48px" } }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { sm: "center" },
            justifyContent: { xs: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%" },
            }}
          >
            <Typography
              sx={{
                color: "#f7d64a",
                fontSize: { xs: "", sm: "36px" },
                fontWeight: "900",
                marginBottom: "25px",
                lineHeight: "1.1",
                fontFamily: "Inter",
              }}
            >
              Eligibility Criteria For A Business Loan
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "17px", sm: "20px" },
                fontWeight: "200",
                fontFamily: "Inter",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              Eligibility Assessment Made Easy: Find Out If You Qualify in Under
              3 minutes*
            </Typography>
            <Box>
              <GetMatchedButton />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start" },
            justifyContent: { xs: "flex-start" },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { xl: "90%" },
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },
                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
                fontFamily: "Inter",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Business owners, individuals, entrepreneurs, MSMEs, startups and
              self-employed professionals, such as CS, CAs, architects and
              doctors
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },
                //   fontWeight: "900",
                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
                fontFamily: "Inter",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Public and private limited companies, partnership firms, sole
              proprietorships, LLPs
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },
                //   fontWeight: "900",
                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
                fontFamily: "Inter",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Large enterprises dealing only in trading, services and
              manufacturing sectors
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18pxpx" },
                //   fontWeight: "900",
                marginBottom: "25px",
                textAlign: { xs: "left" },
                lineHeight: "1.5",
                fontFamily: "Inter",
              }}
            >
              {" "}
              <FiberManualRecord sx={{ ...CircleIcon }} />
              Co-operative societies, NGOs and trusts
            </Typography>
            <List>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",

                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Age :
                </Typography>{" "}
                21 to 65 years old
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",

                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Employment type :
                </Typography>{" "}
                Self-employed
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",

                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Business tenure :
                </Typography>{" "}
                At least 1 year or more
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  // display: "inline",
                  padding: 0,
                }}
                components={"span"}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Minimum yearly turnover:
                </Typography>
                Vary across lenders
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "400",
                  fontFamily: "Inter",
                  padding: 0,
                }}
              >
                <FiberManualRecord sx={{ ...CircleIcon }} />
                <Typography
                  sx={{
                    color: "#f7d64a",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    fontSize: { xs: "16px", sm: "18px" },
                    // display: "inline",
                  }}
                  component={"span"}
                >
                  Credit score :
                </Typography>{" "}
                750 or more
              </ListItem>
            </List>
            <Typography
              sx={{ fontSize: "15px", fontFamily: "Inter", color: "FFFFFF" }}
            >
              <Typography sx={{ fontWeight: "600" }} component={"span"}>
                Note:
              </Typography>{" "}
              The above-mentioned details can vary from lender to lender
              depending on their terms and conditions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EligibilityCriteria;
