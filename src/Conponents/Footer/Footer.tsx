import "./footer.css";
import { useLocation } from "react-router-dom";

interface Props {
  note: string;
}

const Footer = (props: Props) => {
  const { pathname } = useLocation();
  // you can check a more conditions here
  if (pathname !== "/Main") return null;
  return (
    <div className="footer">
      <h1>{props.note}</h1>
    </div>
  );
};

export default Footer;
