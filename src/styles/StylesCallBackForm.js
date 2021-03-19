import styled from "styled-components";
import send from "../img/ic-send.png";

export const Content = styled.div`
  width: 960px;
  margin-bottom: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
`;

export const SectionTitle = styled.h4`
  text-align: center;
  color: #313334;
  font-size: 20px;
  line-height: 23px;
  padding: 41px 250px 35px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 47px;
  background: #ffffff;
  border-radius: 18px;
  flex: 1;
  box-shadow: 0px 25px 100px 0px rgba(72, 174, 75, 1);
`;

export const Btn = styled.button`
  border: none;
  height: 60px;
  width: 278px;
  padding: 6px 45px 0 0;
  border-radius: 4px;
  background: url(${send}) no-repeat 93% 50%, #72bf44;
  box-shadow: 0 20px 0 -14px rgba(0, 152, 16, 1);
  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Input = styled.input`
  align-self: center;
  border: 3px solid #dae0e5;
  border-radius: 4px;
  margin-bottom: 43px;
  color: black;
  width: 320px;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0em;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
`;
