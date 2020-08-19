import React from 'react';
import {
  Container,
  ContainerContent,
  ContainerText,
  Header,
  HeaderTitle,
  Icon,
} from '../components';

const Setting = () => {
  return (
    <Container>
      <Header>
        <Icon name="dots-horizontal" color="#5affd7" />
        <HeaderTitle>Configuração</HeaderTitle>
      </Header>
      <ContainerContent>
        <Icon name="dots-horizontal" size={60} />
        <ContainerText>Você está na tela de configuração!</ContainerText>
      </ContainerContent>
    </Container>
  );
};

export default Setting;
