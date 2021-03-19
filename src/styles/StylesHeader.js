import styled from "styled-components";
import bckgImg from "../img/headerImg.png";
import logo from "../img/ic-logo.png";

export const MainTitle = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
`;

export const Title = styled.h2`
  margin: 0;
  background: url(${logo}) no-repeat -46px -33px;
  padding: 9px 647px 20px 77px;
  font-family: Roboto Condensed;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 960px;
  height: 408px;
  background: url(${bckgImg}) no-repeat;
  border: 1px solid #dae0e5;
  box-sizing: border-box;
  border-radius: 18px;
  padding: 39px 0 42px 43px;
`;

export const HeadContent = styled.p`
  width: 28%;
  height: 44%;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;
