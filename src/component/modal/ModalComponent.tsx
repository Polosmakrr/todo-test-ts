import React, { useEffect, KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalViev, Close } from "./modalStyled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<HTMLInputElement>;
  }
}

interface modalProps {
  open: boolean;
  handleClose: () => void;
  children: JSX.Element;
}

export const ModalComponent: React.FC<modalProps> = ({
  open,
  handleClose,
  children,
}) => {
  useEffect(() => {
    const hadleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.code === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", hadleKeyDown);

    return () => {
      window.removeEventListener("keydown", hadleKeyDown);
    };
  }, [handleClose]);

  const handleBackDropClick = (event: any) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      {open && (
        <ModalViev>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Close type="button" onClick={handleClose}>
              &#128473;
            </Close>
          </div>

          {children}
        </ModalViev>
      )}
    </Backdrop>,
    modalRoot
  );
};
