import React from 'react';
import './App.css';
import {Posts} from "./features/posts/Posts";
import ReactDOM from "react-dom/client";
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div> 
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
        </Route>
        <Route path="/posts" element={<Posts />}>
        </Route>
      </Routes>
    </BrowserRouter>
      </div>

  );
}

export default App;
