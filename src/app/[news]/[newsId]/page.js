import getSingleNewsById from "@/utils/getSingleNewsById";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NewsDetals = async ({ params }) => {
  const { data } = await getSingleNewsById(params.newsId);
  console.log(data);
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Image
              alt="img"
              width={800}
              height={800}
              src={data.thumbnail_url}
            />
            <Grid className="my-4" container spacing={2}>
              <Grid item xs={6} md={6}>
                <Image
                  alt="img"
                  width={800}
                  height={800}
                  src={data.image_url}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Image
                  alt="img"
                  width={800}
                  height={800}
                  src={data.image_url}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography gutterBottom variant="h4">
              {data.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <Avatar alt="Author" src={data.author.img} />
              <Typography gutterBottom>
                By {data.author.name} - {data.author.published_date}
              </Typography>
            </Box>
            <Typography
              sx={{
                whiteSpace: "pre-line",
              }}
              variant="body2"
              color="text.secondary"
            >
              {data.details}
            </Typography>
            <Typography className="my-4" gutterBottom>
              ``Many desktop publishing packages and web page editors now use as
              their default model text!
            </Typography>
            <Typography variant="body2" gutterBottom>
              --by Nabani Chowdhury
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetals;
