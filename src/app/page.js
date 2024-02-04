import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid className="my-10" container spacing={2}>
      <Grid item xs={8}>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
    </Grid>
  );
}
