import styled from "styled-components";
import cam from "../img/cam-sm.png";
import ras from "../img/ras.png";
import wifi from "../img/wifi.png";
import speed from "../img/100.png";
import btv from "../img/btv.png";
import xsCam from "../img/cam-xs.png";

export const Content = styled.div`
  width: 960px;
  margin-bottom: 110px;
`;

export const ServiceTitle = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 39px;
  font-family: Roboto Condensed;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 27px;
  width: 213.7px;
  height: 213.7px;
  background: linear-gradient(180deg, #8cb928 0%, #45ae4d 100%);
  box-shadow: 0px 25px 100px 0px rgba(72, 174, 75, 1);
  border-radius: 18px;
`;

export const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

export const Buy = styled(Link)`
  background: url(${cam}) no-repeat 50% 40%;
  background-position: top;
  padding: 113px 0px 0px 0px;
`;

export const Installment = styled(Link)`
  background: url(${ras}) no-repeat 50% 40%;
  padding: 129px 10px 0px 10px;
`;

export const PackageControl = styled(Link)`
  background: url(${speed}) no-repeat 15% 45%, url(${cam}) no-repeat 50% 40%,
    url(${wifi}) no-repeat 85% 40%;
  padding: 119px 30px 0px 30px;
`;

export const PackageAllIn = styled(Link)`
  background: url(${speed}) no-repeat 17% 45%, url(${btv}) no-repeat 51% 0,
    url(${xsCam}) no-repeat 51% 50%, url(${wifi}) no-repeat 86% 45%;
  padding: 121px 30px 0px 30px;
`;
