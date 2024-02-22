import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import loanrepayment from "../../../assets/images/CreditScoreImages/loanrepayment.png";
import duration from "../../../assets/images/CreditScoreImages/duration.png";
import numberofhard from "../../../assets/images/CreditScoreImages/numberof hard.png";
import utilization from "../../../assets/images/CreditScoreImages/utilization.png";
import creditmix from "../../../assets/images/CreditScoreImages/creditmix.png";

const HowCreditScore = () => {
  const CardData = [
    {
      title: "Loan Repayment History",
      description:
        "Timely payments positively impact your score, while late payments significantly lower it.",
      image: loanrepayment,
      align: "right",
    },
    {
      title: "Duration Of Credit History",
      description:
        "The longer your credit history with consistent on-time payments, the higher your score.",
      image: duration,
      align: "center",
    },
    {
      title: "Number Of Hard Inquiries",
      description:
        "Frequent hard inquiries, indicative of multiple credit applications, can negatively affect your score.",
      image: numberofhard,
      align: "left",
    },
    {
      title: "Credit Utilization",
      description:
        "Keeping your credit utilization below 30% is ideal, as exceeding it can negatively impact your score.",
      image: utilization,
      align: "center",
    },
    {
      title: "Credit Mix",
      description:
        "A diverse credit portfolio with various types of credit (loans, cards) positively influences your score.",
      image: creditmix,
      align: "center",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FDF8E3" }}>
      <Container maxWidth={"lg"}>
        <Grid container sx={{ padding: "80px 0px 10px" }}>
          {/* Top section */}
          <Grid item sm={12}>
            <Box>
              <Box
                sx={{
                  // padding: "3rem 0 2rem",
                  textAlign: "center",
                  // maxWidth: "856px",
                  // margin: "auto",
                  // fontSize: "1rem",
                }}
              >
                <Typography
                  sx={{
                    lineHeight: { xs: "1.1", md: "1.5" },
                    marginBottom: "25px",
                    fontSize: { xs: "24px", sm: "30px", md: "40px" },
                    fontFamily: "Inter",
                    color: "#243771",
                    fontWeight: "900",
                    textAlign: "center",
                    margin: { sm: "0px 0px 28px", md: "0px 100px 28px" },
                  }}
                >
                  How A Credit Score Is Calculated?
                </Typography>
                <Typography
                  sx={{
                    lineHeight: { xs: "1.1", sm: "1.5" },
                    marginBottom: "25px",
                    fontSize: { xs: "16px", sm: "20px" },
                    fontFamily: "Inter",
                    color: "#243771",
                    // fontWeight: "900",
                    margin: { sm: "0px 0px 60px", md: "0px 28px 60px" },
                  }}
                >
                  Various factors contribute to your credit score, including:
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Bottom Section */}
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={2}
        >
          {CardData.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Card
                  elevation={0}
                  sx={{
                    maxWidth: "50%",
                    minWidth: "300px",
                    minHeight: "360px",
                    textAlign: "center",
                    margin: "0 auto",
                    bgcolor: "#FDF8E3",
                  }}
                >
                  <CardActionArea>
                    <Box>
                      <img
                        alt="image1"
                        src={step.image}
                        style={{
                        //   marginBottom: "45px",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        sx={{
                          opacity: ".5",
                          lineHeight: ".1",
                          marginTop: "5px",
                          zIndex: "2",
                          fontSize: "52px",
                          fontFamily: "Inter",
                          color: "#e4e4e4",
                          fontWeight: "900",
                        }}
                      ></Typography>
                      <Typography
                        sx={{
                          lineHeight: { xs: "1.1", sm: "1.5" },
                          marginBottom: "25px",
                          fontSize: { xs: "21px" },
                          fontFamily: "Inter",
                          color: "#243771",
                          fontWeight: "900",
                          // textAlign:{xs:"center"}
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: "1.5",
                          marginBottom: "25px",
                          fontSize: { xs: "16px" },
                          fontFamily: "Inter",
                          color: "#404040",
                          // fontWeight:"900"
                        }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowCreditScore;
