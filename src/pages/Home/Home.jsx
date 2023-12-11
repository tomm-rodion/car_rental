import {
  WrapperUk,
  Wrapper,
  Text,
  ButtonByCatalog,
  TitleUk,
} from './Home.styled';

export default function Home() {
  return (
    <>
      <Wrapper>
        <WrapperUk>
          <TitleUk>stop the war in Ukraine</TitleUk>
        </WrapperUk>
        <Text>Travel is easy with our car rental app</Text>
        <ButtonByCatalog to={'/catalog'}>
          Start choosing a rental car
        </ButtonByCatalog>
      </Wrapper>
    </>
  );
}
