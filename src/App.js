import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

import { Grid, useMediaQuery } from "@material-ui/core";

function App() {
  const isMoreThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const isMoreThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      {isMoreThanSm && <Header></Header>}
      <Grid container spacing={3}>
        <Grid
          style={{ paddingTop: isMoreThanSm ? 80 : 10 }}
          item
          xs={12}
          md={7}
        >
          <AddSong></AddSong>
          <SongList></SongList>
        </Grid>
        <Grid
          xs={12}
          md={5}
          style={
            isMoreThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: 80,
                }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0,
                }
          }
        >
          <SongPlayer></SongPlayer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
