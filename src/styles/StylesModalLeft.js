import styled from "styled-components";
import angle from "../img/modal_angle.png";
import close from "../img/modal_close.png";
import nigthVision from "../img/modal_nigth.png";
import record from "../img/modal_rec.png";
import resolution from "../img/modal_resol.png";
import wifi from "../img/modal_wifi.png";

export const Content = styled.div`
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

export const Ul = styled.ul`
  &.modal > &.modal-body {
    z-index: 2;
    position: relative;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100%;
  }
  width: 720px;
  padding: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background: linear-gradient(180deg, #8cb928 0%, #45ae4d 100%);
  border-radius: 18px;
  box-shadow: 0px 25px 100px 0px rgba(72, 174, 75, 1); */}
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 0 0 49%;
  width: 311px;
  height: 196px;
  background: #ffffff;
  border-radius: 18px;
  margin-bottom: 15px;
`;

export const Div = styled.div`
  width: 126px;
  height: 126px;
  border-radius: 100%;
  background: linear-gradient(180deg, #8bb928 0%, #45ae4d 100%);
  box-shadow: 0px 10px 40px #45ae4d;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  width: 42%;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #313334;
`;

export const Btn = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 100%;
  background: url(${close}) no-repeat 50% 50%,
    linear-gradient(180deg, #8bb928 0%, #45ae4d 100%);
  box-shadow: 0px 10px 40px #45ae4d;
  margin-right: 40px;
`;

export const Angle = styled(Div)`
  background: url(${angle}) no-repeat 50% 40%;
`;

export const NigthVision = styled(Div)`
  background: url(${nigthVision}) no-repeat 50% 40%;
`;

export const Record = styled(Div)`
  background: url(${record}) no-repeat 50% 40%;
`;

export const Resolution = styled(Div)`
  background: url(${resolution}) no-repeat 50% 40%;
`;

export const Wifi = styled(Div)`
  background: url(${wifi}) no-repeat 50% 40%;
`;
