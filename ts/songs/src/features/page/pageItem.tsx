import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
// @ts-ignore
import classes from "./ResultItem.module.css";
// @ts-ignore
const ResultItem = ({ resultItem }) => {
  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 0,
          }}
        >
          {/* if api is song */}

          <Card
            sx={{ display: "flex", direction: "rtl", margin: 1, padding: 2 ,marginTop:3,boxShadow:'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px' }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 151,
                height: "auto",
                borderRadius: 2,
                marginLeft: 2,
              }}
              image={resultItem.cover.thumbnail}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", width: "400px" }}>
                <Typography component="div" variant="h5">
                  {resultItem.name.persian}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {resultItem.type == "SONG" ? (
                    <>
                      <span>
                        آهنگ | تک آوا | 00:0
                        {Math.floor(resultItem.chosenTrack.length / 60)}:
                      </span>
                      <span>
                        {Math.round(
                          (resultItem.chosenTrack.length / 60 -
                            Math.floor(resultItem.chosenTrack.length / 60)) *
                            60
                        )}
                      </span>
                      <p>{resultItem.artist[0].persian} </p>نسخه رایگان:{" "}
                      <a
                        href={
                          resultItem.chosenTrack.source
                            ? resultItem.chosenTrack.source
                            : "#"
                        }
                        target="_blank"
                      >
                        {resultItem.chosenTrack.source
                          ? resultItem.chosenTrack.source
                          : ""}
                      </a>
                    </>
                  ) : (
                    ""
                  )}

                  {resultItem.type == "AUDIO_BOOK" ? (
                    <>
                      <p>{resultItem.narrators[0].persian} </p>
                      <a
                        href={
                          resultItem.chosenTrack.source
                            ? resultItem.chosenTrack.source
                            : "#"
                        }
                        target="_blank"
                      >
                        {resultItem.chosenTrack.source
                          ? resultItem.chosenTrack.source
                          : ""}
                      </a>
                    </>
                  ) : (
                    ""
                  )}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <audio controls>
                  <source
                    src={
                      resultItem.chosenTrack.urls[5]
                        ? resultItem.chosenTrack.urls[5]
                        : ""
                    }
                  />
                </audio>
              </Box>
            </Box>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ResultItem;
