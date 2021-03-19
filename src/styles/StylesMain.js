import styled from "styled-components";
import camImg from "../img/cam.png";

export const Content = styled.div`
  width: 960px;
  margin: 104px 0 70px 0;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 619px;
  left: 414px;
  top: 551px;
  background: linear-gradient(180deg, #8cb928 0%, #45ae4d 100%);
  border-radius: 18px;
  box-shadow: 0px 25px 100px 0px rgba(72, 174, 75, 1);
  margin-bottom: 15px;
`;

export const CamImg = styled.img`
  width: 210px;
  height: 458px;
`;

CamImg.defaultProps = {
  src: camImg,
};

export const Link = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;