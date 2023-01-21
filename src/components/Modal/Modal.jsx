import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContent, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", toggleModal);
    return () => {
      window.removeEventListener("keydown", toggleModal);
    };
  }, []);

  const toggleModal = (e) => {
    if (e.code === "Escape") closeModal();
  };

  const onClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <ModalWindow onClick={onClick}>
      <ModalContent>{children}</ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
};
