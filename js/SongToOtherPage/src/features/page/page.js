import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults, selectSearchTerm } from "../search/slice";
import { increamentPage, selectPage } from "./pageSlice";
import { selectErrorMessage } from "../search/slice";
import { getResults } from "../search/actions";
import PageItem from "./pageItem";
import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import img404 from "../../images/404.png";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import InputBase from "@mui/material/InputBase";
import useDocumentTitle from "../search/useDocumentTitle";

function Page() {
  //const [page, setPage] = useState(2);

  const theme = useTheme();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#7C4DFF"),
    backgroundColor: "#7C4DFF",
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  const errrorMessage = useSelector(selectErrorMessage);
  const searchResults = useSelector(selectSearchResults);
  let query = useSelector(selectSearchTerm);

  const dispatch = useDispatch();
  let isLoading = useSelector(selectIsLoading);
  const [show, setShow] = useState(1);
  let page = useSelector(selectPage);
  let prevScrollY = 0;

  let navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  let queryurl = queryParameters.get("q");
  useEffect(() => {
    if (query == null && queryurl != null) {
      query = queryurl;

      if (queryParameters.get("type")) {
        type = queryParameters.get("type");
      } else {
        type = "ALL";
      }
      dispatch(getResults({ query, page: 1, type }));
    }
  }, []);

  useDocumentTitle(`Zarebin-${queryurl}`);

  function filterFunction(name) {
    query = queryParameters.get("q");
    dispatch(getResults({ query, page: 1, type: name }));
    // navigate("/search?q=" + query + "&type=" + name);
    navigate(`/search?q=${query}&type=${name}`);
  }
  let type;
  const handlePages = () => {
    if (queryParameters.get("type")) {
      type = queryParameters.get("type");
    } else {
      type = "ALL";
    }
    // setPage(page + 1);
    dispatch(increamentPage());
    dispatch(getResults({ query, page, type }));
  };

  let content = "";

  if (searchResults.length > 0) {
    content = (
      <>
        {searchResults.map((result) => (
          <PageItem resultItem={result} key={result.id} />
        ))}
      </>
    );
  }

  function handleScroll() {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      currentScrollY > prevScrollY &&
      currentScrollY >= prevScrollY + 100 &&
      windowHeight + currentScrollY >= documentHeight
    ) {
      dispatch(increamentPage());
      if (queryParameters.get("type")) {
        type = queryParameters.get("type");
      } else {
        type = "ALL";
      }
      query = queryParameters.get("q");
      dispatch(getResults({ query, page, type }));
      prevScrollY = currentScrollY;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // if (isLoading) {
  //   content = (
  //     <Backdrop
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open={isLoading}
  //     >
  //       <CircularProgress color="inherit" />
  //     </Backdrop>
  //   );
  // }

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

              <h4>
                <a href="/">بازگشت به صفحه اصلی سایت</a>
              </h4>
            </>
          ) : (
            ""
          )}

          {searchResults.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "600px",
                alignItems: "center",
                mb: 5,
                pb: 5,
                borderBottom: "1px solid  silver",
              }}
            >
              <Paper
                component="form"
                action="search"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "100px",
                  textAlign: "right",
                  mt: 0,
                  marginRight: "3%",
                }}
                onSubmit=""
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <KeyboardVoiceIcon sx={{ paddingRight: "4px" }} />
                  {/* {query.length  ? <ClearIcon onClick="" /> : ""} */}
                </IconButton>
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,

                    "& input": {
                      textAlign: "right",
                    },
                  }}
                  placeholder="جست و جو کنید "
                  inputProps={{ "aria-label": "search google maps" }}
                  id="q"
                  name="q"
                  disabled
                  value={query ? query : queryParameters.get("q")}
                  onChange=""
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.155 16.31a5.473 5.473 0 01-5.466-5.467 5.473 5.473 0 015.466-5.466 5.472 5.472 0 015.466 5.466 5.474 5.474 0 01-5.466 5.466zm0-14.31a8.855 8.855 0 00-8.845 8.845 8.855 8.855 0 008.845 8.845A8.856 8.856 0 0022 10.845 8.856 8.856 0 0013.155 2zM4.292 17.392a2.293 2.293 0 10.001 4.585 2.293 2.293 0 000-4.585z"
                      fill="#939598"
                    ></path>
                  </svg>
                </IconButton>
                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
              </Paper>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="30"
                viewBox="0 0 128.89 29.431"
              >
                <g data-name="Logo Primary - Landscape (Large size) Purple+Orange">
                  <g data-name="Group 1" fill="#434148">
                    <path
                      data-name="Path 1"
                      d="M69.394 14.954a12.475 12.475 0 01-4.27 9.4l-1.673 1.46a.7.7 0 00-.067.982l1.831 2.1a.7.7 0 00.982.067l1.673-1.46a16.649 16.649 0 005.7-12.543v-1.568a.7.7 0 00-.7-.7h-2.785a.7.7 0 00-.7.7z"
                    ></path>
                    <path
                      data-name="Path 2"
                      d="M80.024 7.248H77.05a.7.7 0 00-.7.7v2.785a.7.7 0 00.7.7h3.058a3.839 3.839 0 013.858 3.4 3.77 3.77 0 01-3.748 4.129h-4.213a.7.7 0 00-.7.7v2.785a.7.7 0 00.7.7h4.213a7.951 7.951 0 007.936-8.249 8.071 8.071 0 00-8.13-7.65z"
                    ></path>
                    <path
                      data-name="Path 3"
                      d="M65.986 15.548a8.013 8.013 0 10-8.013 8.014 8.022 8.022 0 008.013-8.014zm-8.013 3.836a3.836 3.836 0 113.836-3.836 3.841 3.841 0 01-3.836 3.837z"
                    ></path>
                    <path
                      data-name="Path 4"
                      d="M43.146 11.883a3.311 3.311 0 01-3.534 3.3 3.385 3.385 0 01-3.08-3.416v-1.482a.664.664 0 00-.664-.664H32.73a.375.375 0 00-.376.375 5.145 5.145 0 01-4.471 5.162 5.054 5.054 0 01-5.624-5.016v-.2a.674.674 0 00-.674-.674h-2.827a.674.674 0 00-.674.674 9.353 9.353 0 009.132 9.42 9.2 9.2 0 006.753-2.848 7.474 7.474 0 006.33 2.835 7.6 7.6 0 007.026-7.642V8.549a.674.674 0 00-.674-.674h-2.829a.674.674 0 00-.674.674z"
                    ></path>
                    <rect
                      data-name="Rectangle 1"
                      width="12.129"
                      height="4.034"
                      rx="2.017"
                      transform="translate(28.334 23.56)"
                    ></rect>
                    <path
                      data-name="Path 5"
                      d="M78.323 4.737a2.369 2.369 0 10-2.369-2.369 2.369 2.369 0 002.369 2.369z"
                    ></path>
                    <path
                      data-name="Path 6"
                      d="M45.645 23.208a2.369 2.369 0 102.369 2.369 2.369 2.369 0 00-2.369-2.369z"
                    ></path>
                    <circle
                      data-name="Ellipse 1"
                      cx="2.369"
                      cy="2.369"
                      r="2.369"
                      transform="translate(8.723 15.971)"
                    ></circle>
                    <path
                      data-name="Path 7"
                      d="M10.716 25.244a6.915 6.915 0 01-.261-13.79.7.7 0 00.637-.691V7.969a.7.7 0 00-.74-.7 11.092 11.092 0 1011.807 11.807.7.7 0 00-.7-.74h-2.794a.7.7 0 00-.691.637 6.923 6.923 0 01-7.258 6.271z"
                    ></path>
                  </g>
                  <g data-name="Group 2">
                    <path
                      data-name="Path 8"
                      d="M116.103 0a12.8 12.8 0 00-12.787 12.787 12.8 12.8 0 0012.787 12.788 12.8 12.8 0 0012.787-12.787A12.8 12.8 0 00116.103 0zm0 20.689a7.911 7.911 0 01-7.9-7.9 7.911 7.911 0 017.9-7.9 7.911 7.911 0 017.9 7.9 7.911 7.911 0 01-7.9 7.901z"
                      fill="#651fff"
                    ></path>
                    <path
                      data-name="Path 9"
                      d="M102.912 22.663a3.315 3.315 0 00-3.315 3.315 3.315 3.315 0 003.315 3.315 3.315 3.315 0 003.315-3.315 3.315 3.315 0 00-3.315-3.315z"
                      fill="#ff9100"
                    ></path>
                  </g>
                </g>
              </svg>
            </Box>
          ) : (
            ""
          )}

          {/* if api is song */}
          {searchResults.length > 0 ? (
            <Box
              sx={{ width: "600px", display: "flex", justifyContent: "center" }}
            >
              {" "}
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
                variant="p"
                component="p"
                sx={{ paddingLeft: "5px", color: "#7C4DFF" }}
              >
                {" "}
                : فیلتر نتایج
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

          {isLoading ? (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            ""
          )}
          {/* {searchResults.length > 0 ? (
            <ColorButton
              variant="contained"
              onClick={handlePages}
              sx={{ width: "500px", marginTop: "3%", marginBottom: "3%" }}
            >
              <FormattedMessage id="more" defaultMessage="more" />
            </ColorButton>
          ) : (
            ""
          )} */}
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
