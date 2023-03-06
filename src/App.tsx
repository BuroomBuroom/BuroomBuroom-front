import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layouts/Layout";
import { Login } from "./pages/auth/Login";
import { Booking } from "./pages/booking/Booking";
import { Main } from "./pages/main/Main";
import { Timetable } from "./pages/timetable/Timetable";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
