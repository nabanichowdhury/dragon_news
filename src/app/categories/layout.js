import CatagoryList from "@/components/ui/CatagoryList/CatagoryList";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const CatagoryLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CatagoryList />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CatagoryLayout;
