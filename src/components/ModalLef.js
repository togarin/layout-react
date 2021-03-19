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
  Wifi,
  P,
  Resolution,
  NigthVision,
  Record,
  Angle,
} from "../styles/StylesModalLeft";

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
        <Btn role="button" onClick={close} />
        <Ul className="modal-body">
          <Li>
            <Div>
              <Wifi />
            </Div>
            <P>Работает по Wi-Fi или кабелю</P>
          </Li>
          <Li>
            <Div>
              <Resolution />
            </Div>
            <P>Разрешение 1280х960 (HD)</P>
          </Li>
          <Li>
            <Div>
              <NigthVision />
            </Div>
            <P>Ночная съемка</P>
          </Li>
          <Li>
            <Div>
              <Record />
            </Div>
            <P>Запись звука и видео</P>
          </Li>
          <Li>
            <Div>
              <Angle />
            </Div>
            <P>Угол обзора 100°</P>
          </Li>
          <Li>
            <Div></Div>
            <P>Длина кабеля 1.5 метра</P>
          </Li>
        </Ul>
      </Content>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);
