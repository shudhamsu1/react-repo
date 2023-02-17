import "./Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ children, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        {/* <button
          onClick={handleClose}
          className={isSalesModal ? "sales-btn" : ""}
        >
          close
        </button> */}
      </div>
    </div>,
    document.body
  );
}
