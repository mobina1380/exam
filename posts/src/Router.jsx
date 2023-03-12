import { BrowserRouter, Routes, Route } from "react-router-dom";

import { User } from './features/user/Users';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}