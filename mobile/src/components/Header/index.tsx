import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import { Container, Logo, Title } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo onPress={() => navigation.navigate('Dashboard')}>
        <Image source={logoImg} />
      </Logo>
      <Title>16 de abril</Title>
    </Container>
  );
};

export default Header;
