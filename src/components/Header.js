import { Content, MainTitle, Title, HeadContent } from "../styles/StylesHeader";

const Header = () => {
  return (
    <Content>
      <MainTitle>Yours H1 title</MainTitle>
      <Title>Датчик спокойствия</Title>
      <HeadContent>
        Комплекс из камеры и мобильного приложения, который помогает в любой
        момент убедиться, что с близкими и домом всё в порядке.
      </HeadContent>
    </Content>
  );
};

export default Header;
