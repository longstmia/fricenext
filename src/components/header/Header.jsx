import "./header.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <a href="">
          <img src="/path-to-logo.png" alt="Logo" />
        </a>
      </div>
      <nav className="header_nav">
        <ul>
          <li>
            <a href="#courses">Курсы</a>
          </li>
          <li>
            <a href="#how-it-works">Как проходит обучение</a>
          </li>
        </ul>
      </nav>
      <div className="header_cta">
        <ul>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
        <Button text="ЗАПИСАТЬСЯ" />
      </div>
    </header>
  );
}

export default Header;
