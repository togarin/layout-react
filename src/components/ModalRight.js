import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import {
  Content,
  Btn,
  Ul,
  Li,
  Div,
  P,
  AccessFamily,
  AccessGlobal,
  Alarm,
  Data,
  Download,
  Move,
} from "../styles/StylesModalRight";

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
      <Content className={`modal`}>
        <Ul className="modal-body">
          <Li>
            <Div>
              <Move />
            </Div>
            <P>Уведомление на телефон о движении</P>
          </Li>
          <Li>
            <Div>
              <Data />
            </Div>
            <P>Хранение данных на защищенных серверах</P>
          </Li>
          <Li>
            <Div>
              <AccessFamily />
            </Div>
            <P>Совместный доступ у членов семьи</P>
          </Li>
          <Li>
            <Div>
              <Download />
            </Div>
            <P>Скачивание/удаление архивных записей</P>
          </Li>
          <Li>
            <Div>
              <AccessGlobal />
            </Div>
            <P>Доступ из любой точки мира</P>
          </Li>
          <Li>
            <Div>
              <Alarm />
            </Div>
            <P>Уведомление о приходе «Домашних»</P>
          </Li>
        </Ul>
        <Btn role="button" onClick={close} />
      </Content>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);
