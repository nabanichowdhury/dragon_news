import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const DynamicNewsRoute = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div>
      <h1 className="mt-10">
        Total <span className="font-bold">{searchParams.category}</span> news:
        {data.length}
      </h1>
      <Grid
        className="my-4"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news._id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      height={800}
                      width={800}
                      src={news.image_url}
                      alt={news.title}
                    />
                  </CardMedia>
                  <span className="bg-red-500 text-white w-[100px] px-2 my-4 mx-3 rounded">
                    {news.category}
                  </span>

                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom>
                      By {news.author.name} - {news.author.published_date}
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
    </div>
  );
};

export default DynamicNewsRoute;
