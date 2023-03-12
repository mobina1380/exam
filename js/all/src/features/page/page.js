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
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  const errrorMessage = useSelector(selectErrorMessage);
  const searchResults = useSelector(selectSearchResults);
  const query = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  let isLoading = useSelector(selectIsLoading);
  const [show, setShow] = useState(1);
  //let page = useSelector(selectPage);
  function filterFunction(name) {
    dispatch(getResults({ query, page: 1, type: name }));
  }

  const handlePages = () => {
    setPage(page + 1);

    dispatch(getResults({ query, page }));
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
