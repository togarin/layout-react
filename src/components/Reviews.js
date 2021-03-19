import {
  Content,
  Card,
  Avatar,
  Info,
  Div,
  P,
  Button,
} from "../styles/StylesReviews";

const Review = () => {
  return (
    <Content>
      <Card>
        <Avatar />
        <Info>
          <Div>Алексей Гоно</Div>
          <P>
            Отличное и удобное приложение. Классные возможности, отзывчивая
            поддержка.
          </P>
          <Button as="a" />
        </Info>
      </Card>
    </Content>
  );
};

export default Review;
