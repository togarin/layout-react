import styled from "styled-components";
import send from "../img/ic-send.png";

export const Div = styled.div`
  &.modal {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1.5em 1em;
    z-index: 999999;
    box-sizing: border-box;
  }
`;

export const Content = styled.div`
  &.modal > &.modal-body {
    z-index: 2;
    position: relative;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100%;
  }
  width: 960px;
  margin-bottom: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const Title = styled.h4`
  color: #313334;
  font-size: 20px;
  line-height: 23px;
  padding: 41px 200px 35px;
  font-family: Roboto Condensed;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Btn = styled.span`
  border: none;
  height: 60px;
  width: 278px;
  padding: 19px 45px 0 20px;
  border-radius: 4px;
  background: url(${send}) no-repeat 93% 50%, #dae0e5;
  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
`;
