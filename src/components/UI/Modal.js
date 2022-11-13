import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlap = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const insertElement = document.getElementById("overlaps");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlap>{props.children}</ModalOverlap>,
        insertElement
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        insertElement
      )}
    </>
  );
};

export default Modal;
