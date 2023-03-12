import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import Zarebin from './features/search/zarebin';
import Searchbar from './features/search/zarebin';
import Page from './features/page/page';
function App() {
  return (
        <>
      <Searchbar />
      <Page />
        </>
    //   <div>


    //   <BrowserRouter>
    //   <Routes>

    //     <Route path="/" element={ <Zarebin  />} />

    //       <Route path="/img" element={ <Uploadimg  />}>
    //       </Route>
    //       <Route path="/city" element={ <City  />}>
    //       </Route>
    //       
    //   </Routes>
    // </BrowserRouter>
    //   </div>
  );
}

export default App;
