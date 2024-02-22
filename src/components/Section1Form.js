import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";

const Section1Form = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: { md: "450px" },
        }}
      >
        <TextField
          placeholder="XXXXXXXXXX"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{
                  // height: "100%",
                  fontWeight: 900,
                  paddingRight: "15px",
                  opacity: 2,
                }}
              >
                <span></span>🇮🇳 +91
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "#fff",
            // border: "1px solid #F7D64A",
            width: { xs: "100%", md: "285px" },
            borderRadius: "8px",
            "& input": {
              fontSize: "16px",
              border: "none",
            },
            "& fieldset": {
              borderColor: "#F7D64A",
            },
          }}
        />
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "#243788",
              color: "#F7D64A",
            },
            padding: "14px 18px",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            border: "1px solid #F7D64A",
            backgroundColor: "#F7D64A",
            color: "#243788",
            marginLeft: { md: "8px" },
            fontWeight: "900",
            transition: ".4s all ease-in-out",
            textTransform: "capitalize ",
            // width:{xs:"100%",md:"285px",xl:"150px"},
            marginTop: { xs: "16px", md: "0px" },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </>
  );
};

export default Section1Form;
