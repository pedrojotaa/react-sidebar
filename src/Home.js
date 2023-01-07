import "./index.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Home() {
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
}

export default Home;
