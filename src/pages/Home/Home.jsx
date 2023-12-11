import { Wrapper, Text, ButtonByCatalog } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Text>Travel is easy with our car rental app</Text>
      <ButtonByCatalog to={'/catalog'}>
        Start choosing a rental car
      </ButtonByCatalog>
    </Wrapper>
  );
}
