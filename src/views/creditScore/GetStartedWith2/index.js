import React from "react";
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

const GetStartedWith2 = ({ openModal2, handleCloseModal2 }) => {
  return (
    <Dialog
      open={openModal2}
      onClose={handleCloseModal2}
      maxWidth={{ xs: "50%", sm: "70%", xl: "100%" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "#fff",
          border: "3px solid #243771",
          height: "auto",
          position: "relative",
        borderRadius:"5px",
        }}
      >
        <Box sx={{ position: "absolute", right: "0", top: "0" }}>
          <Button onClick={handleCloseModal2}>
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
            height: { xs: "45%", sm: "70%", md: "100%" },
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
            padding: "24px",
            marginTop: "20px",
          }}
        >
          <DialogTitle
            sx={{
              fontSize: { xs: "18px", sm: "27px" },
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#262250",
              padding: "0",
            }}
          >
            Get Started With Credmudra
          </DialogTitle>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              fontWeight: "400",
              fontFamily: "Inter",
              color: "#262250",
              paddingY: "10px",
            }}
          >
            Enter your personal details
          </Typography>
          <Box sx={{ paddingY: "10px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Inter",
                color: "#243771",
                paddingBottom: "10px",
              }}
            >
              Full Name(As per PAN Card)
            </Typography>
            <TextField
              name="amount"
              variant="outlined"
              fullWidth
              placeholder="Name"
            />
          </Box>
          <Box sx={{ paddingY: "10px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Inter",
                color: "#243771",

                paddingBottom: "10px",
              }}
            >
              PAN Number
            </Typography>
            <TextField
              name="amount"
              variant="outlined"
              fullWidth
              placeholder="Number"
            />
          </Box>
          <Box sx={{ paddingY: "10px" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Inter",
                color: "#243771",

                paddingBottom: "10px",
              }}
            >
              Email ID
            </Typography>
            <TextField
              name="amount"
              variant="outlined"
              fullWidth
              placeholder="Email ID"
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
                bgcolor: "#75A54C",
                "&:hover": {
                  background: "#75A54C",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                Generate Credit Score
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default GetStartedWith2;
