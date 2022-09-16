import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout/Layout";
import NoPage from "./Pages/Nopage/Nopage";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/main";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="main" element={<Main message="Click to generate QR" />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
