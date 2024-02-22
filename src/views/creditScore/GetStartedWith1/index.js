import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CreditScoreMeter from "../../../assets/images/CreditScoreImages/credit_score_concept2 [Converted].png";
import { Link } from "react-router-dom";
import GetStartedWith2 from "../GetStartedWith2";

const GetStartedWith1 = ({ openModal,onClose,handleButtonClick2,handleCloseModal }) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal} maxWidth={{ xs: "40%", xl: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: "#fff", border: "3px solid #243771",borderRadius:"5px", height: "auto", position:"relative",}}
      >
        <Box sx={{position:"absolute", right:'0', top:"0"}}>
          <Button onClick={onClose}>
            <DisabledByDefaultIcon sx={{ color: "#F7D64A" }} />
          </Button>
        </Box>
        {/* Left side with image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: { xs: "45%", sm: "70%", md: "100%" },
          }}
        >
          <img src={CreditScoreMeter} alt="meter" style={{ maxWidth: "80%" }} />
        </Grid>
        {/* Right side with content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: { xs: "center", md: "flex-start" },
            // alignItems: { xs: "center", md: "flex-start" },
            padding: { xs: "15px", md: "24px" },
            marginTop:"20px"
          }}
        >
          <DialogTitle
            sx={{
              fontSize: { xs: "16px", sm: "27px" },
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#262250",
              padding: "0",
              // textAlign:{xs:"center", md:"left"}
            }}
          >
            Get Started With Credmudra
          </DialogTitle>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "18px" },
              fontWeight: "400",
              fontFamily: "Inter",
              color: "#262250",
              paddingY: "10px",
              // textAlign:{xs:"center", md:"left"}
            }}
          >
            Enter your mobile number to login or signup
          </Typography>
          <Box sx={{ paddingY: "10px", marginBottom: "50px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Inter",
                color: "#243771",
                paddingY: "10px",
              }}
            >
              Mobile
            </Typography>
            <TextField
              name="amount"
              variant="outlined"
              fullWidth
              width="100%"
              placeholder="Enter Mobile"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox defaultChecked />
            <Typography sx={{ color: "#243771", fontSize: "11px" }}>
              By continuing, I agree to{" "}
              <Link href="/" color="#243771">
                terms
              </Link>{" "}
              of use and{" "}
              <Link href="/" color="#243771">
                privacy policy
              </Link>
              .
            </Typography>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <Button
              type="submit"
              sx={{
                textTransform: "none",
                width: "100%",
                padding: "10px 10px",
                bgcolor: "#E4E7ED",
                "&:hover": {
                  background: "#E4E7ED",
                },
              }}
              onClick={handleButtonClick2}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#243771",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Proceed
              </Typography>
            </Button>
            {/* {openModal2 && <GetStartedWith2 onClose={handleCloseModal} />} */}
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default GetStartedWith1;
