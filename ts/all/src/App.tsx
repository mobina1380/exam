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
    //       <Route path="/carosul" element={ <Carosul  />}>
    //       </Route>
    //      <Route path="/homepage" element={ <HomePage  />}>
    //     </Route>
    //       <Route path="/addname" element={ <Addname  />}>
    //     </Route>
    //      <Route path="/Set_ResetPassword" element={<Set_ResetPassword />}>
    //     </Route>
    //      <Route path="/EmailVerification" element={<EmailVerification />}>
    //     </Route>
    //      <Route path="/ResetPassword" element={<ResetPassword />}>
    //     </Route>
    //      <Route path="/TypePassword" element={<TypePassword />}>
    //     </Route>
    //      <Route path="/Otp" element={<Otp />}>
    //     </Route>
      
    //   </Routes>
    // </BrowserRouter>
    //   </div>
  );
}

export default App;
