import React, { useState, useEffect } from 'react';
import api from '../services/api';
import {
  Container,
  ContainerContent,
  ContainerText,
  Header,
  Icon,
  HeaderTitle,
  Loader,
  SwiperCustom,
} from '../components';

const SwiperEnd = () => (
  <ContainerContent>
    <Icon name="emoticon-wink-outline" size={120} />
    <ContainerText>Parabéns! Isso é tudo.</ContainerText>
  </ContainerContent>
);

const Match = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [nice, setNice] = useState(false);
  useEffect(() => {
    const professionals = async () => {
      await api
        .get(
          '/api?results=36&nat=br&noinfo&inc=picture,name,gender,dob,login,email',
        )
        .then((response) => {
          setData(response.data.results);
          setLoader(false);
        });
    };
    professionals();
  }, []);
  return (
    <Container>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Icon name="trophy" color="#5affd7" />
            <HeaderTitle>Lorem ipsum dolor sit amet</HeaderTitle>
          </Header>
          {nice ? <SwiperEnd /> : null}
          <SwiperCustom data={data} setNice={setNice} />
        </>
      )}
    </Container>
  );
};

export default Match;
