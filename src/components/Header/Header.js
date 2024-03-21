import "./Header.css";
import logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="LOGO" />
      <h1>Przelicznik walut</h1>
    </header>
  );
}

export default Header;
