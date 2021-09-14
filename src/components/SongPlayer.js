import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Slider,
  Typography,
} from "@material-ui/core";

import QueuedSongList from "./QueuedSongList";
import { PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    width: "100%",
  },
  content: {
    flex: "1 0 auto",
  },
  thumbnail: {
    width: 200,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

function SongPlayer() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.container}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h3">
              title
            </Typography>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              artist
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow fontSize="large" />
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              00:01:30
            </Typography>
          </div>
          <Slider type="range" min={0} max={1} step={0.01} />
        </div>
        <CardMedia className={classes.thumbnail} />
      </Card>
      <QueuedSongList></QueuedSongList>
    </>
  );
}

export default SongPlayer;
