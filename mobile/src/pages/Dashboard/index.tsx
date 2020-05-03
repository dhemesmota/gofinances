import React from 'react';
import { Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import { Container, Title } from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Container>
        <Title>Dashboard</Title>
        <Button onPress={() => navigation.navigate('Import')} title="Import" />
      </Container>
    </>
  );
};

export default Dashboard;
