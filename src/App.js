import React, { useRef } from "react";
import GlobalStyle from "../src/styles/Global";
import { Container } from "../src/styles/StylesApp";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Services from "../src/components/Services";
import CallBack from "../src/components/CallBackForm";
import Review from "../src/components/Reviews";
import ModalLeft from "../src/components/ModalLef";
import ModalRight from "../src/components/ModalRight";
import ModalCallBack from "../src/components/ModalCallBack";

const App = () => {
  const modalLeft = useRef(null);
  const modalRight = useRef(null);
  const modalCallBack = useRef(null);

  return (
    <>
      <Container>
        <Header />
        <Main
          handleOpenModalLeft={() => modalLeft.current.open()}
          handleOpenModalRigth={() => modalRight.current.open()}
        />
        <Services />
        <CallBack
          handleOpenModalCallBack={() => modalCallBack.current.open()}
        />
        <Review />
        <ModalLeft ref={modalLeft} />
        <ModalRight ref={modalRight} />
        <ModalCallBack ref={modalCallBack} />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
