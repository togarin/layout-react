import styled from "styled-components";
import ellips from "../img/ellipse.png";
import avatar from "../img/avatar.png";
import btn from "../img/ic-down.png";

export const Content = styled.div`
  width: 960px;
  margin-bottom: 110px;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 560px;
  height: 240px;
  background: url(${ellips}) no-repeat 20px 20px,
    linear-gradient(180deg, #8cb928 0%, #45ae4d 100%);
  border-radius: 18px;
`;

export const Avatar = styled.img`
  width: 31%;
  height: 46%;
  padding: 32px 0 0 32px;
`;
Avatar.defaultProps = {
  src: avatar,
};

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0 0 26px;
`;

export const Div = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

export const P = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 100%;
  height: 12%;
  background: url(${btn}) no-repeat 30% 50%;
`;
