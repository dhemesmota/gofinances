import React from 'react';

import Header from '../../components/Header';

import { Container, Content, Title } from './styles';

const Import: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Cadastrar</Title>
      </Content>
    </Container>
  );
};

export default Import;
