import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Layout from "./Pages/Layout/Layout";
import NoPage from "./Pages/Nopage/Nopage";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/main";

function App(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="main" element={<Main message="Click to generate QR" />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
