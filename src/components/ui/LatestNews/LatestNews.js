import { Box, Grid } from "@mui/material";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";
import bitcoin from "@/assets/bitcoin.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";

const LatestNews = async () => {
  const { data } = await getAllNews();

  return (
    <Box>
      <Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image
                alt="img"
                width={800}
                height={800}
                src={data[0].thumbnail_url}
              />
            </CardMedia>
            <p className="bg-red-500 text-white w-[100px] px-2 my-5 rounded">
              {data[0].category}
            </p>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data[0].title}
              </Typography>
              <Typography gutterBottom>
                {data[0].author.name} - {data[0].author.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data[0].details.length > 200
                  ? data[0].details.slice(0, 200) + "..."
                  : data[0].details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

      <Grid
        className="my-4"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(1, 5).map((news) => (
          <Grid key={news._id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image
                      alt="img"
                      width={800}
                      height={800}
                      src={news.thumbnail_url}
                    />
                  </CardMedia>
                  <p className="bg-red-500 text-white w-[100px] px-2 my-5 rounded">
                    {news.category}
                  </p>

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom>
                      {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
