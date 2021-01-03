import React from "react";

const Modal = ({ show, children }) => {
  const toggleShow = show ? "modal show" : "modal hide";
  return (
    <div className={toggleShow}>
      <div className="modal-main">{children}</div>
    </div>
  );
};

export default Modal;
