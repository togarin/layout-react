import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { Content, Btn, Div, Title } from "../styles/StylesModalCallBack";

const modalElement = document.getElementById("modal-root");

export const Modal = ({ defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  return createPortal(
    isOpen ? (
      <Div className={`modal`}>
        <Content className="modal-body" onClick={close} >
          <Title>Спасибо, что оставили заявку. Мы скоро вам перезвоним.</Title>
          <Btn>отправить заявку</Btn>
        </Content>
      </Div>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);
