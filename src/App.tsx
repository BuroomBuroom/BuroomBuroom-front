import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layouts/Layout";
import { Header } from "./components/shared/header/Header";
import { Login } from "./pages/auth/Login";
import { Booking } from "./pages/booking/Booking";
import { Main } from "./pages/main/Main";
import { Mypage } from "./pages/mypage/Mypage";
import { Timetable } from "./pages/timetable/Timetable";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
