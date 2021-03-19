import React from "react";
import { Content, Ul, Li, Link, CamImg, Div } from "../styles/StylesMain";

const Main = (props) => {
  const { handleOpenModalLeft, handleOpenModalRigth } = props;
  return (
    <Content>
      <Ul>
        <Li>
          <Link>
            <CamImg />
          </Link>
        </Li>
        <Li>
          <Link>
            <CamImg />
          </Link>
        </Li>
      </Ul>
      <Div>
        <Link onClick={handleOpenModalLeft}>Подробнее</Link>
        <Link onClick={handleOpenModalRigth}>Подробнее</Link>
      </Div>
    </Content>
  );
};

export default Main;
