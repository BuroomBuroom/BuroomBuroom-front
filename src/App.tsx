import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layouts/Layout";
import { Header } from "./components/shared/header/Header";
import { Booking } from "./pages/booking/Booking";
import { Main } from "./pages/main/Main";
import { Mypage } from "./pages/mypage/Mypage";
import { Timetable } from "./pages/timetable/Timetable";
import { Redirect } from "./pages/auth/Redirect";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "./components/shared/footer/Footer";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/oauth/callback" element={<Redirect />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/mypage" element={<Mypage />} />
            </Routes>
          </Layout>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
