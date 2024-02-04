import { getAllCatagories } from "@/utils/getAllCatagories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CatagoryList = async () => {
  const { data: allCatagories } = await getAllCatagories();
  return (
    <Box>
      <Typography className="text-center" color="grey" variant="body">
        Catagories
      </Typography>
      <Divider />
      <Stack sx={{ my: 2 }}>
        {allCatagories.map((catagory) => (
          <Button sx={{ my: 1 }} key={catagory.id} variant="outlined">
            <Link href={`news?category=${catagory.title.toLowerCase()}`}>
              {catagory.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CatagoryList;
