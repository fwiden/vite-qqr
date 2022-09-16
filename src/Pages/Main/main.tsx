import { useState } from "react";
import QRCode from "qrcode";

// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";

interface Props {
  message: string;
}

function Main(props: Props) {
  const [url, setUrl] = useState("12345rrr");
  const [qrcode, setQrcode] = useState("");
  const str = Math.random().toString(36).slice(2);
  console.log(str);

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
      <div className="main">
        <h1 className="main-heading">{props.message}</h1>
        <div>
          <h3>{str}</h3>
        </div>

        {/* <input
          type="text"
          placeholder="Typa e string"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        /> */}

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
