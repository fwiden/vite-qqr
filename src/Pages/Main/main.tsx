import { useState } from "react";
import QRCode from "qrcode";
import dotenv from "dotenv";
import { Link } from "react-router-dom";

// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";

interface Props {
  message: string;
}

let api = {
  baseUrl: import.meta.env.BASE_URL,
  mode: import.meta.env.MODE,
  isindev: import.meta.env.DEV,
  runninginserver: import.meta.env.SSR,
  somekey: import.meta.env.VITE_BASE_URL,
};

function Main(props: Props) {
  const [url, setUrl] = useState("12345rrr");
  const [qrcode, setQrcode] = useState("");
  const str = Math.random().toString(36).slice(2);
  console.log(api);

  // https://www.npmjs.com/package/qrcode#qr-code-options
  const GenerateQRCode = () => {
    setUrl(str);
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#000000ff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="qr-page">
      <Link to="/">Logout and go Home</Link>
      <div className="main">
        <h1 className="main-heading">{props.message}</h1>

        <input
          type="text"
          placeholder="Typa e string"
          value={str}
          onChange={() => setUrl(str)}
        />

        <button className="button qr-button" onClick={GenerateQRCode}>
          <span>Generate QR</span>
        </button>

        {qrcode && (
          <>
            <img src={qrcode} className="qr-image" />
            <a href={qrcode} download="qrcode.png" className="button">
              Download
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
