import { FaTimes } from "react-icons/fa";
import "./index.css";
import logo from "./logo.svg";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} classname="logo" alt="coding addict" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
      {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
