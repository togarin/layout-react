import {
  Content,
  ServiceTitle,
  Ul,
  Li,
  Buy,
  Installment,
  PackageAllIn,
  PackageControl,
} from "../styles/StylesServices";

const Services = () => {
  return (
    <Content>
      <ServiceTitle>Приобрести</ServiceTitle>
      <Ul>
        <Li>
          <Buy>Покупка</Buy>
        </Li>
        <Li>
          <Installment>Рассрочка</Installment>
        </Li>
        <Li>
          <PackageControl>Пакет “Все под контролем”</PackageControl>
        </Li>
        <Li>
          <PackageAllIn>Пакет “Тысяча пятьсот”</PackageAllIn>
        </Li>
      </Ul>
    </Content>
  );
};

export default Services;
