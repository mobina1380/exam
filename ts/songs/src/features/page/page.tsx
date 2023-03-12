import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults, selectSearchTerm } from "../search/slice";
import { increamentPage, selectPage } from "./pageSlice";
import { selectErrorMessage } from "../search/slice";
import { getResults } from "../search/actions";
import PageItem from "./pageItem";
import React, { useState } from "react";
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
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { WidthFull } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { selectIsLoading } from "../search/slice";
import img404 from "../../images/404me.webp";

function Page() {
  const [page, setPage] = useState(2);
  const theme = useTheme();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#7C4DFF'),
    backgroundColor:'#7C4DFF',
    "&:hover": {
      backgroundColor: '#7C4DFF',
    },
  }));
  const errrorMessage = useSelector(selectErrorMessage);
  const searchResults = useSelector(selectSearchResults);
  const query = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  let isLoading = useSelector(selectIsLoading);
  const [show, setShow] = useState(1);
  //let page = useSelector(selectPage);
  function filterFunction(name:any) {
    dispatch(getResults({ query, page: 1, type: name }));
  }

  const handlePages = () => {
    setPage(page + 1);

    dispatch(getResults({ query, page }));
  };

  let content:any = "";

  if (searchResults.length > 0) {
    content = (
      <>
        {searchResults.map((result:any) => (
          <PageItem resultItem={result} key={result.id} />
        ))}
      </>
    );
  }

  if (isLoading) {
    content = (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {errrorMessage ? (
            <>
              <h2>{errrorMessage}</h2>

              <img src={img404} />
            </>
          ) : (
            ""
          )}
            {/* if api is song */}
            {searchResults.length > 0 ? (
            <Box
              sx={{ width: "600px", display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ marginRight: "5px", backgroundColor: "#7C4DFF" }}
                onClick={() => filterFunction("PODCAST")}
              >
                {" "}
                <FormattedMessage id="Podcast" defaultMessage="پادکست" />
              </Button>{" "}
              <Button
                variant="contained"
                sx={{ marginRight: "5px", backgroundColor: "#7C4DFF" }}
                onClick={() => filterFunction("AUDIO_BOOK")}
              >
                {" "}
                <FormattedMessage
                  id="Audio book"
                  defaultMessage="کتاب صوتی"
                />{" "}
              </Button>
              <Button
                variant="contained"
                sx={{ marginRight: "5px", backgroundColor: "#7C4DFF" }}
                onClick={() => filterFunction("SONG")}
              >
                {" "}
                <FormattedMessage id="Songs" defaultMessage="آهنگ" />
              </Button>
              <Button
                variant="contained"
                sx={{ marginRight: "5px", backgroundColor: "#7C4DFF" }}
                onClick={() => filterFunction("ALL")}
              >
                <FormattedMessage id="All" defaultMessage="همه" />
              </Button>
              <Typography
                
                component="p"
                sx={{ paddingLeft: "5px", color: "#7C4DFF" }}
              >
                {" "}
                :فیلتر
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#7C4DFF"
                  d="M2.833 2A.842.842 0 002 2.833v1.03c0 .766.352 1.49.953 1.964l3.38 2.663v5.01a.497.497 0 00.271.444.499.499 0 00.52-.037l2.333-1.667a.494.494 0 00.21-.407V8.49l3.38-2.663A2.503 2.503 0 0014 3.863v-1.03A.842.842 0 0013.167 2H2.833zM3 3h10v.863c0 .46-.21.893-.572 1.178L9.096 7.667H6.904L3.572 5.04A1.494 1.494 0 013 3.863V3zm4.333 5.667h1.334v2.91l-1.334.952V8.667z"
                  opacity="0.8"
                ></path>
              </svg>
            </Box>
          ) : (
            ""
          )}
          {content}
          {/* {searchResults.map((result) => (
          <PageItem resultItem={result} />
         
        ))} */}

          {searchResults.length > 0 && !isLoading ? (
            <ColorButton
              variant="contained"
              onClick={handlePages}
              sx={{ width: "500px", marginTop: "3%", marginBottom: "3%" }}
            >
              <FormattedMessage id="more" defaultMessage="more" />
            </ColorButton>
          ) : (
            ""
          )}
        </Container>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        ></Container>
      </ThemeProvider>
    </>
  );
}

export default Page;
