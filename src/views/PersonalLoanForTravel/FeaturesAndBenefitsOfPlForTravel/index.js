import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import featuresoftravelimg1 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg1.png";
import featuresoftravelimg2 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg2.png";
import featuresoftravelimg3 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg3.png";
import featuresoftravelimg4 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg4.png";
import featuresoftravelimg5 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg5.png";
import featuresoftravelimg6 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg6.png";
import featuresoftravelimg7 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg7.png";
import featuresoftravelimg8 from "../../../assets/images/PersonalLoanForTravelImages/featuresoftravelimg8.png";

const FeaturesAndBenefitsOfPlForTravel = () => {
  const ListBox = {
    width: { xs: "92%", sm: "100%" },
    minHeight:{sm:'350px',md:"200px",lg:"170px",xl:"150px"},
    alignItems: "center",
    background: "#fcefb8",
    borderRadius: "5px",
    boxShadow: " 0 3px 6px rgba(0,0,0,.161)",
    display: "flex",
    margin: { xs: "0 10px 0px 20px", sm: "0" },
    // padding: "18px 15px 14px",
    gap: "10px",
    justifyContent: "center",
  };

  const primaryTextStyles = {
    fontSize: "18px",
    fontFamily: "Inter",
    color: "#5ab56b",
    fontWeight: "800",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
    margin: "0 0 8px",
  };

  const secondaryTextStyles = {
    fontSize: "16px",
    fontFamily: "Inter",
    color: "#404040",
    paddingLeft: "10px",
    lineHeight: { xs: "1.3" },
  };

  const ListItemDetails = [
    {
      image: featuresoftravelimg1,
      alt: "Instant loan approval",
      title: "Instant Travel Loan",
      description:
        "Due to low eligibility criteria, travel loan takes the minimum time possible for approval. Take our compatibility test to hasten the process.",
    },
    {
      image: featuresoftravelimg2,
      alt: "Instant loan approval",
      title: "Flexible Borrowing Terms",
      description:
        "With available flexible borrowing terms and conditions, withdraw the amount as and when required and pay interest only on the amount used.",
    },
    {
      image: featuresoftravelimg3,
      alt: "Instant loan approval",
      title: "Fast Disbursal",
      description:
        "Once your documents are verified and you satisfy all our eligibility criteria, your loan takes the shortest time possible which can range between a few hours and a few days.",
    },
    {
      image: featuresoftravelimg4,
      alt: "Instant loan approval",
      title: "100% Paperless Process",
      description:
        "Our whole process is digital. You can complete the process from application to approval from the comfort of your place.",
    },
    {
      image: featuresoftravelimg5,
      alt: "Instant loan approval",
      title: "Ample Disbursal Amount",
      description:
        "Our loan amount varies within the range of Rs.500 and Rs.10 lakhs. Depending upon your requirement and repayment capability, you can avail a loan of as much amount as you require.",
    },
    {
      image: featuresoftravelimg6,
      alt: "Instant loan approval",
      title: "Minimal Documentation",
      description:
        "All we need is a few KYC documents and your income proof. We keep our documentation process minimal so that the queue of our customers waiting remains as short as possible.",
    },
    {
      image: featuresoftravelimg7,
      alt: "Instant loan approval",
      title: "Pre-Approved Offers",
      description:
        "If you are pre-approved for availing the personal loan facility, you get quick access to the personal loan for travel.",
    },
    {
      image: featuresoftravelimg8,
      alt: "Instant loan approval",
      title: "No Collateral Needed",
      description:
        "The best part is that you don’t need to put anything mortgage or as collateral. This cuts down half of the hassle of documentation process. However, for short-term loans, some of our lenders might require collateral.",
    },
  ];
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ padding: "60px 0px 50px" }}>
        <Box>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { xs: "24px", sm: "36px" },
              fontFamily: "Inter",
              color: "#243771",
              fontWeight: "800",
              lineHeight: { xs: "1.3", sm: "1.5" },
              margin: { xs: "0px 0px 46px" },
            }}
          >
            Features And Benefits Of Travel Loan
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {ListItemDetails.map((doc, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{ padding: "0px 10px 0px", width: { xl: "100%" } }}
            >
              <List sx={{ ...ListBox }}>
                <ListItem>
                  <ListItemIcon sx={{ paddingRight: "10px" }}>
                    <img src={doc.image} alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary={doc.title}
                    secondary={doc.description}
                    primaryTypographyProps={{ style: primaryTextStyles }}
                    secondaryTypographyProps={{ style: secondaryTextStyles }}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesAndBenefitsOfPlForTravel;
