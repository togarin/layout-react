import React, { useState, useEffect } from "react";
import {
  Content,
  Btn,
  Input,
  Section,
  SectionTitle,
} from "../styles/StylesCallBackForm";
import InputMask from "react-input-mask";
import axios from "axios";

const CallBack = (props) => {
  const { handleOpenModalCallBack } = props;
  const [phone, setPhone] = useState("");
  const [phoneNum, setPhoneNum] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = "http://localhost:3001/callBack";

  const catchMessages = (error) => {
    if (error.response && error.response.status) {
      if (error.response.status === 500) {
        setErrorMessage("Cерверная ошибка");
      } else if (error.response.status === 404) {
        setErrorMessage("Cущность не найдена в системе");
      } else if (error.response.status === 400) {
        setErrorMessage("Неверный запрос");
      } else if (error.response.status === 200) {
        setErrorMessage("Верный запрос");
      }
    } else setErrorMessage(error.message);
  };

  useEffect(() => {
    const fetchPhones = async () => {
      const result = await axios(apiUrl);
      setPhoneNum(result.data);
    };
    fetchPhones();
  }, []);

  const createCallBack = async (phone) => {
    setIsFetching(true);
    try {
      const response = await axios.post(apiUrl, { phone });
      const newPhone = response.data;
      setPhoneNum([newPhone, ...phoneNum]);
      setErrorMessage("Верный запрос");
      setPhone("");
      handleOpenModalCallBack();
    } catch (error) {
      catchMessages(error);
    }
    setIsFetching(false);
  };

  return (
    <Content>
      <Section>
        <SectionTitle>
          Оставьте заявку, и мы позвоним вам в ближайшее время
        </SectionTitle>

        <InputMask
          mask="+7 999 999 9999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maskPlaceholder="+7 ___ ___ ____"
          children={() => <Input placeholder="+7 ___ ___ ____" />}
        />
        <Btn
          onClick={() => {
            createCallBack(phone);
          }}
        >
          отправить заявку
        </Btn>
      </Section>
    </Content>
  );
};

export default CallBack;
