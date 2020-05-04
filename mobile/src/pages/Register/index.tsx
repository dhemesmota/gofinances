import React, { useState, useCallback } from 'react';
import { Image } from 'react-native';

import entradasImg from '../../assets/entradas.png';
import saidasImg from '../../assets/saidas.png';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Title,
  Form,
  Input,
  Button,
  ButtonText,
  ButtonsContent,
  Btn,
  BtnText,
} from './styles';

const Register: React.FC = () => {
  const [selectButton, setSelectButton] = useState<
    'income' | 'outcome' | 'default'
  >('default');

  const handleSubmit = useCallback((): void => {
    console.log('submit');
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Cadastro</Title>
        <Form>
          <Input placeholder="Nome" autoCapitalize="words" autoCorrect />
          <Input placeholder="Preço" keyboardType="decimal-pad" />
          <ButtonsContent>
            <Btn
              onPress={() => setSelectButton('income')}
              select={selectButton === 'income'}
              type={selectButton}>
              <Image
                source={entradasImg}
                style={{ height: 26, width: 26, marginRight: 10 }}
              />
              <BtnText>Income</BtnText>
            </Btn>
            <Btn
              onPress={() => setSelectButton('outcome')}
              select={selectButton === 'outcome'}
              type={selectButton}
              style={{ marginLeft: 10 }}>
              <Image
                source={saidasImg}
                style={{ height: 26, width: 26, marginRight: 10 }}
              />
              <BtnText>Outcome</BtnText>
            </Btn>
          </ButtonsContent>
          <Input
            placeholder="Categoria"
            autoCapitalize="words"
            autoCorrect={false}
          />
          <Button onPress={handleSubmit}>
            <ButtonText>Enviar</ButtonText>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
