import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, makeStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormattedMessage } from "react-intl";
import SearchIcon from "@material-ui/icons/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { getResults } from "./actions";
import { useDispatch } from "react-redux";
import { addSearchTerm, setDefaultResults } from "./slice";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ai1 from "../../images/ai.jpg";
import ai2 from "../../images/ai2.jpg";
import ai3 from "../../images/ai3.jpg";
import NorthWestIcon from "@mui/icons-material/NorthWest";
const theme = createTheme();

export default function Home() {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState("none");
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);
    // console.log({
    //     query: data.get('q'),

    // });

    dispatch(addSearchTerm(query));
    //dispatch(setDefaultResults());
    dispatch(getResults({ query, page: 1 }));
    navigate("/search?q=" + query);
    // for song api
    // dispatch(getResults({ query, page: 1 ,type:'ALL'}));
  };
  const searchInputHadler = (event) => {
    setQuery(event.target.value);
  };

  const clearhandler = (event) => {
    setQuery("");
  };
  const displayhandler = () => {
    setDisplay("block");
  };

  const blurhandler = () => {
    setDisplay("none");
  };

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
            marginTop: 10,
          }}
        >
          <Box
            sx={{
              marginTop: 10,
              marginBottom: 5,
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                mt: 4,
              }}
              onSubmit={handleSubmit}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <KeyboardVoiceIcon sx={{ paddingRight: "4px" }} />
                {query.length > 0 ? <ClearIcon onClick={clearhandler} /> : ""}
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
                value={query}
                onFocus={displayhandler}
                onBlur={blurhandler}
                onChange={searchInputHadler}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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

            <Box
              sx={{
                width: "500px",
                height: "200px",
                boxShadow:
                  " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                backgroundColor: "#ffff",
                display: { display },
                position: "absolute",
                mt: 14,
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                textAlign: "right",
              }}
            >
              <List sx={{ textAlign: "right" }}>
                <ListItem
                  disablePadding
                  sx={{ textAlign: "right", borderBottom: "1px solid #eee" }}
                >
                  <ListItemIcon>
                    <NorthWestIcon sx={{ paddingLeft: "5px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="تاریخچه چهارشنبه سوری "
                    sx={{ paddingRight: "20px", color: "rgba(0, 0, 0, 0.4)" }}
                  />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ textAlign: "right", borderBottom: "1px solid #eee" }}
                >
                  <ListItemIcon>
                    <NorthWestIcon sx={{ paddingLeft: "5px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="اشعار قدیمی چهارشنبه سوری "
                    sx={{ paddingRight: "20px", color: "rgba(0, 0, 0, 0.4)" }}
                  />
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ textAlign: "right", borderBottom: "1px solid #eee" }}
                >
                  <ListItemIcon>
                    <NorthWestIcon sx={{ paddingLeft: "5px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="ساعت تحویل سال ۱۴۰۲"
                    sx={{ paddingRight: "20px", color: "rgba(0, 0, 0, 0.4)" }}
                  />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ textAlign: "right", borderBottom: "1px solid #eee" }}
                >
                  <ListItemIcon>
                    <NorthWestIcon sx={{ paddingLeft: "5px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="تعطیلی های سال ۱۴۰۲"
                    sx={{ paddingRight: "20px", color: "rgba(0, 0, 0, 0.4)" }}
                  />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ textAlign: "right", borderBottom: "1px solid #eee" }}
                >
                  <ListItemIcon>
                    <NorthWestIcon sx={{ paddingLeft: "5px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="کتاب صوتی لیلی و مجنون"
                    sx={{ paddingRight: "20px", color: "rgba(0, 0, 0, 0.4)" }}
                  />
                </ListItem>
              </List>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "auto",
                mt: 6,
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row-reverse",
              }}
            >
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                گلچین
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{
                  color: "#7C4DFF",
                  borderBottom: "2px solid #7C4DFF",
                  pb: 3,
                }}
              >
                خبر
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                ورزش
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                سرگرمی
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                خانواده
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                هنر
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                علم و فناوری
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                اندیشه
              </Typography>
              <Typography
                variant="p"
                color="initial"
                sx={{ color: "rgba(0, 0, 0, 0.4)" }}
              >
                سلامت
              </Typography>
            </Box>

            <Card sx={{ maxWidth: "100%", mt: 5, textAlign: "right" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={ai1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  کاربردهای هوش مصنوعی
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  به زبان ساده هوش مصنوعی چیست؟ آیا ربات‌ها همان هوش مصنوعی (AI)
                  هستند که همه در موردشان صحبت می‌کنند؟ هوش مصنوعی چه کارهایی را
                  انجام می‌دهد؟ آیا آینده نسل بشر در خطر است؟ هوش مصنوعی چگونه
                  فکر می‌کند؟
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: "100%", mt: 5, textAlign: "right" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={ai2}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  هوش مصنوعی چیست؟
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  خیلی از افراد هنوز هم با شنیدن واژه هوش مصنوعی به ربات ها فکر
                  می کنند و تصور می کنند که منظور از هوش مصنوعی همان ربات های بی
                  احساسی هستند که برای انجام راحت تر کارها طراحی شده‌اند و قرار
                  است در آینده جای انسان ها را بگیرند. مسئول این نوع تفکر به
                  احتمال زیاد فیلم های علمی و تخیلی است اما واقعیت با آنچه که
                  تصور می شود تفاوت دارد.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: "100%", mt: 5, textAlign: "right" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={ai3}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  تاریخچه هوش مصنوعی
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  تاریخچه هوش مصنوعی به سال های جنگ جهانی دوم بر می‌گردد. زمانی
                  که نیروهای آلمانی برای رمز نگاری و ارسال ایمن پیام ها از ماشین
                  enigma استفاده می کردند و دانشمند انگلیسی، آلن تورینگ در تلاش
                  برای شکست این کدها برآمد. تورینگ به همراه تیمش ماشین bombe را
                  ساختند
                </Typography>
              </CardContent>
            </Card>

            {/* <form onSubmit={handleSubmit}>
            
            
            
                    <TextField
                        InputProps={{
                            endAdornment: (
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.155 16.31a5.473 5.473 0 01-5.466-5.467 5.473 5.473 0 015.466-5.466 5.472 5.472 0 015.466 5.466 5.474 5.474 0 01-5.466 5.466zm0-14.31a8.855 8.855 0 00-8.845 8.845 8.855 8.855 0 008.845 8.845A8.856 8.856 0 0022 10.845 8.856 8.856 0 0013.155 2zM4.292 17.392a2.293 2.293 0 10.001 4.585 2.293 2.293 0 000-4.585z" fill="#939598"></path></svg>



                            ),
                            sx: {
                                textAlign: "right",
                                
                                  marginTop:'20px',
                                borderRadius: '100px',
                                width: '500px',

                                boxShadow: ' 0px 0px 8px rgba(160, 160, 160, 0.5)',

                                "& input": {
                                    textAlign: "right",
                                 
                                    padding:'0.6rem 0 ',
                                    borderRadius: '100px',
                                    width: '500px !important',


                                }
                            }
                        }}
                        margin="normal"
                        required
                        fullWidth
                        id="q"
                        placeholder='جست و جو کنید'
                        name="q"
                        value={query}
                        autoComplete="password"
                        onChange={searchInputHadler}

                    />
                    </form> */}
          </Box>
        </Container>
      </ThemeProvider>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          backgroundColor: "#f4f2f8",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          bottom: 0,
          zIndex: "2000",
        }}
      >
        <Typography
          sx={{
            paddingRight: "10px",
            paddingLeft: "10px",
            mt: 2,
            color: "gray",
          }}
        >
          <FormattedMessage id="feedback" defaultMessage="بازخورد" />
        </Typography>
        <Typography
          sx={{
            paddingRight: "10px",
            paddingLeft: "10px",
            mt: 2,
            color: "gray",
          }}
        >
          <FormattedMessage id="Rules" defaultMessage="قوانین" />
        </Typography>
        <Typography
          sx={{
            paddingRight: "10px",
            paddingLeft: "10px",
            mt: 2,
            color: "gray",
          }}
        >
          <FormattedMessage
            id="Download application"
            defaultMessage="دانلود اپلیکیشن"
          />
        </Typography>
        <Typography
          sx={{
            paddingRight: "10px",
            paddingLeft: "10px",
            mt: 2,
            color: "gray",
          }}
        >
          <FormattedMessage id="contact us" defaultMessage="تماس با ما" />
        </Typography>
        <Typography
          sx={{
            paddingRight: "10px",
            paddingLeft: "10px",
            mt: 2,
            color: "gray",
          }}
        >
          <FormattedMessage id="about us" defaultMessage="درباره ما" />
        </Typography>
      </Box>
    </>
  );
}
