import "./header.css";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
}

const Header = (props: Props) => {
  const { pathname } = useLocation();
  // you can check a more conditions here
  if (pathname !== "/Main") return null;
  return (
    <div className="header">
      <div className="header-content">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
