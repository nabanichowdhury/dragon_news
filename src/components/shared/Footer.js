"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Facebook } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const pages = [
  { name: "Home", pathname: "/" },
  { name: "Pages", pathname: "/pages" },
  { name: "Catagory", pathname: "/catagory" },
  { name: "News", pathname: "/news" },
  { name: "Posts", pathname: "/posts" },
  { name: "Contact", pathname: "/contact" },
];

const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
        </Box>
        <Box className="text-center w-full">
          {pages.map((page) => (
            <Link key={page} href={page.pathname}>
              <Button className="text-white" key={page}>
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="grey" className="text-center">
          {" "}
          © 2021 Dragon News. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
