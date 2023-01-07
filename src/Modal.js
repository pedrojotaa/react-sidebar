import { FaTimes } from "react-icons/fa";
import "./index.css";
import { useGlobalContext } from "./context";

function Modal() {
  return (
    <div className={`modal-overlay`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
