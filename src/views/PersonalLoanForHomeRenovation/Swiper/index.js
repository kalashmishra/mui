import React, { useEffect } from "react";
import Swiper from "swiper";
import "../../../../node_modules/swiper/css/swiper.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import swiperimg1 from "../../../assets/images/SwiperSlide/Layer_x0020_1.svg";
import swiperimg2 from "../../../assets/images/SwiperSlide/tablet.svg";
import swiperimg3 from "../../../assets/images/SwiperSlide/tick.svg";
import swiperimg4 from "../../../assets/images/SwiperSlide/_x33_.svg";
import swiperimg5 from "../../../assets/images/SwiperSlide/dollar.svg";
import swiperimg6 from "../../../assets/images/SwiperSlide/worldwide-shipping.svg";
import swiperimg7 from "../../../assets/images/SwiperSlide/transparency.svg";
import swiperimg8 from "../../../assets/images/SwiperSlide/protection.svg";

const swiperData = [
  {
    title: "90%+ Disbursal Rate",
    description:
      "We work to match you with lenders that align with your needs, increasing your chances of loan approval.",
    image: swiperimg1,
  },
  {
    title: "100% Paperless",
    description:
      "Apply for Link loan sitting in the comfort of your home, as we are 100% digital.",
    image: swiperimg2,
  },
  {
    title: "Prequalified Offers",
    description:
      "Check offer rates without having to worry about the impact on your credit score.",
    image: swiperimg3,
  },
  {
    title: "Tailor Your Loan",
    description:
      "Customise your loan amount from INR 1000 to INR 1,00,000 within the tenure of 3 months to 2 years.",
    image: swiperimg4,
  },
  {
    title: "Instant Approval",
    description:
      "Online approval within 48 hours with less documentation to those needing the loan urgently.",
    image: swiperimg5,
  },
  {
    title: "No geographical limitations*",
    description:
      "The platform is also accessible in many remote and underserved areas with an internet connection.",
    image: swiperimg6,
  },
  {
    title: "No Hidden Charges",
    description:
      "Our process is transparent and fair, as there are no hidden charges that may surprise you.",
    image: swiperimg7,
  },
  {
    title: "Safe and Secure",
    description:
      "We follow all the necessary security protocols, and data privacy standards to make sure that your information is safe and secure.",
    image: swiperimg8,
  },
];

const SwiperComponent = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      //   spaceBetween: 200,
      breakpoints: {
        1220: { slidesPerView: 4, spaceBetween: 200 },
        1100: { slidesPerView: 3.3, spaceBetween: 50 },
        1000: { slidesPerView: 3, spaceBetween: 0 },
        900: { slidesPerView: 2.7, spaceBetween: 0 },
        700: { slidesPerView: 2.1, spaceBetween: 0 },
        500: { slidesPerView: 1.5, spaceBetween: 0 },
        300: { slidesPerView: 1, spaceBetween: 20, dragSize: 100 },
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  });

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ width: "100%", overflow: "visible" }}>
        <Box className="swiper">
          <Box
            className="swiper-wrapper"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {swiperData.map((data, index) => (
              <Box
                className="swiper-slide"
                key={`slide${index}`}
                sx={{ width: "280px" }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    bgcolor: "#eaecf1",
                    borderRadius: "20px",
                    paddingX: "30px",
                    height: "250px",
                    width: "312px",
                  }}
                >
                  <Box sx={{ height: "40%", paddingTop: "30px" }}>
                    <CardMedia
                      sx={{ height: "38px", width: "38px" }}
                      image={data.image}
                    />
                  </Box>
                  <CardContent sx={{ padding: 0, height: "60%" }}>
                    <Typography
                      sx={{
                        fontSize: "21px",
                        color: "#243771",
                        fontWeight: 700,
                        lineHeight: "1.2",
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#243771",
                        paddingTop: "30px",
                      }}
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "20px",
              alignItems: "center",
            }}
          >
            <Box
              className="swiper-scrollbar"
              sx={{
                position: "initial",
                margin: "10px 0",
                width: "-webkit-fill-available",
                height: "7px",
                background:"#243771",
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              <Box className="swiper-prev" sx={{ color: "#f6d549" }}>
                <KeyboardArrowLeftIcon fontSize="large" />
              </Box>
              <Box className="swiper-next" sx={{ color: "#f6d549" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SwiperComponent;
