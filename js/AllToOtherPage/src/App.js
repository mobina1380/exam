import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import Zarebin from './features/search/zarebin';
import Searchbar from './features/search/zarebin';
import Page from './features/page/page';
import { useParams } from 'react-router-dom'
function App() {
 
  return (
      
      <>


      <BrowserRouter>
      <Routes>

        <Route path="/" element={   <Searchbar />} />

          <Route path="/search" element={ <Page  />}>
          </Route>
          <Route path="/search" element={<Page />}></Route>
          <Route path="/search/:query" element={<Page />} />
      
      </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
