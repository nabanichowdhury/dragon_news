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
import { IconButton, Stack } from "@mui/material";
import Header from "./Header";

const pages = [
  { name: "Home", pathname: "/" },
  { name: "Pages", pathname: "/pages" },
  { name: "Category", pathname: "/categories/news?category=all-news" },
  { name: "News", pathname: "/news" },
  { name: "Posts", pathname: "/posts" },
  { name: "Contact", pathname: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <Header />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          color: "white",
          "& svg": {
            color: "white",
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image alt="img" src={logo} width={100} height={100} />
            <Box className="text-center w-full">
              {pages.map((page) => (
                <Link key={page} href={page.pathname}>
                  <Button
                    sx={{
                      color: "white",
                    }}
                    key={page}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                "& svg": {
                  color: "white",
                },
              }}
            >
              <Stack direction="row" spacing={2}>
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
