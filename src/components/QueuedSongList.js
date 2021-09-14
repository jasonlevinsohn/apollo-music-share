import React from "react";
import {
  Avatar,
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function QueuedSongList() {
  const song = {
    title: "The Song Title",
    artist: "The Song Artist",
    thumbnail: "The Song Thumbnail",
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <Typography color="textSecondary" variant="button">
        QUEUE (5)
      </Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueuedSong key={i} song={song}></QueuedSong>
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  avatar: {
    width: 44,
    height: 44,
  },
  text: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  container: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "50px auto",
    alignItems: "center",
    marginTop: 10,
  },
  songInfoContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

function QueuedSong({ song }) {
  const isMoreThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const classes = useStyles();
  const { thumbnail, title, artist } = song;

  return (
    isMoreThanMd && (
      <div className={classes.container}>
        <Avatar alt="song thumbnail" className={classes.avatar} />
        <div className={classes.songInfoContainer}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {artist}
          </Typography>
        </div>
        <IconButton>
          <Delete color="warning" />
        </IconButton>
      </div>
    )
  );
}

export default QueuedSongList;
