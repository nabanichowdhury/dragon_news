import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import headerImage from "@/assets/headerImage.png";

const Header = () => {
  var today = new Date();

  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dayOfWeek = daysOfWeek[today.getDay()];
  var month = months[today.getMonth()];
  var day = today.getDate();
  var year = today.getFullYear();

  var formattedDate = dayOfWeek + ", " + month + " " + day + ", " + year;

  return (
    <Box>
      <Container className="w-full my-5">
        <Image
          alt="img"
          className="mx-auto"
          src={headerImage}
          width={500}
          height={500}
        />
        <Typography variant="body2" color="grey" className="text-center my-4">
          {" "}
          Journalism Without Fear or Favour
        </Typography>
        <Typography className="text-center">{formattedDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
