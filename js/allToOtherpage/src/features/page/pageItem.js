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
          <Card
            sx={{
              display: "flex",
              width: "600px",
              justifyContent: "space-between",
              textAlign: "right",
              marginBottom: "10px",
            }}
          >
            {resultItem.thumbnail != null ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={resultItem.thumbnail}
                />
              </Box>
            ) : (
              ""
            )}

            <CardContent sx={{ flex: "1 0 auto", width: "400px" }}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  maxWidth: resultItem.thumbnail != null ? "400px" : "550px",
                }}
              >
                {resultItem["web_displayed_link"][0]}
                <img src={resultItem.favicon} className={classes.imgfavion} />
              </Typography>
              <a href={resultItem.web_link}>{resultItem.title}</a>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  maxWidth: resultItem.thumbnail != null ? "400px" : "550px",
                }}
              >
                {resultItem.description}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ResultItem;
