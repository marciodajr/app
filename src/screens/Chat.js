import React from 'react';
import {
  Container,
  ContainerContent,
  ContainerText,
  Header,
  HeaderTitle,
  Icon,
} from '../components';

const Chat = () => {
  return (
    <Container>
      <Header>
        <Icon name="chat" color="#5affd7" />
        <HeaderTitle>Conversas</HeaderTitle>
      </Header>
      <ContainerContent>
        <Icon name="chat" size={60} />
        <ContainerText>Você está na tela de conversas!</ContainerText>
      </ContainerContent>
    </Container>
  );
};

export default Chat;
