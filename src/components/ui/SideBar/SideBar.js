import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import bitcoin from "@/assets/bitcoin2.png";

const SideBar = () => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image alt="img" width={800} height={800} src={bitcoin} />
          </CardMedia>
          <p className="bg-red-500 text-white w-[100px] px-2 my-5 rounded">
            Technology
          </p>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Nabani Chowdhury - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid className="my-5" container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image alt="img" width={800} height={800} src={bitcoin} />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {" "}
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid className="my-5" container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image alt="img" width={800} height={800} src={bitcoin} />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {" "}
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid className="my-5" container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image alt="img" width={800} height={800} src={bitcoin} />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {" "}
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid className="my-5" container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image alt="img" width={800} height={800} src={bitcoin} />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {" "}
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid className="my-5" container spacing={2}>
        <Grid item xs={6} md={4}>
          <Image alt="img" width={800} height={800} src={bitcoin} />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {" "}
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again{" "}
          </Typography>
        </Grid>
      </Grid>
      <Image alt="img" width={800} height={800} src={bitcoin} />
    </Box>
  );
};

export default SideBar;
