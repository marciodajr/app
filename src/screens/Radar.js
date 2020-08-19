import React from 'react';
import {
  Container,
  ContainerContent,
  ContainerText,
  Header,
  HeaderTitle,
  Icon,
} from '../components';

const Radar = () => {
  return (
    <Container>
      <Header>
        <Icon name="earth" color="#5affd7" />
        <HeaderTitle>Radar</HeaderTitle>
      </Header>
      <ContainerContent>
        <Icon name="earth" size={60} />
        <ContainerText>Você está na tela de radar!</ContainerText>
      </ContainerContent>
    </Container>
  );
};

export default Radar;
