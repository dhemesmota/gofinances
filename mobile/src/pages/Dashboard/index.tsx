import React from 'react';
import { Image } from 'react-native';

import entradasImg from '../../assets/entradas.png';
import saidasImg from '../../assets/saidas.png';
import totalImg from '../../assets/total.png';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Title,
  ScrollViewCard,
  ContentCard,
  Card,
  CardHeader,
  CardHeaderTitle,
  CardBody,
  CardBodyTitle,
  CardBodySubTitle,
  List,
  ListItem,
  ListItemTitle,
  ListItemValue,
  ListItemContent,
  ListItemContentTitle,
  ListItemContentDate,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
        <Header />
        <ScrollViewCard horizontal showsHorizontalScrollIndicator={false}>
          <ContentCard>
            <Card>
              <CardHeader>
                <CardHeaderTitle>Entradas</CardHeaderTitle>
                <Image source={entradasImg} />
              </CardHeader>
              <CardBody>
                <CardBodyTitle>R$ 17.400,00</CardBodyTitle>
                <CardBodySubTitle>
                  Última entrada dia 13 de abril
                </CardBodySubTitle>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardHeaderTitle>Saidas</CardHeaderTitle>
                <Image source={saidasImg} />
              </CardHeader>
              <CardBody>
                <CardBodyTitle>R$ 1.259,00</CardBodyTitle>
                <CardBodySubTitle>
                  Última entrada dia 03 de abril
                </CardBodySubTitle>
              </CardBody>
            </Card>
            <Card total>
              <CardHeader>
                <CardHeaderTitle style={{ color: '#fff' }}>
                  Total
                </CardHeaderTitle>
                <Image source={totalImg} />
              </CardHeader>
              <CardBody>
                <CardBodyTitle style={{ color: '#fff' }}>
                  R$ 16.141,00
                </CardBodyTitle>
                <CardBodySubTitle style={{ color: '#fff' }}>
                  01 à 16 de abril
                </CardBodySubTitle>
              </CardBody>
            </Card>
          </ContentCard>
        </ScrollViewCard>

        <Content>
          <Title>Listagem</Title>
          <List>
            <ListItem>
              <ListItemTitle>Desenvolvimento de site</ListItemTitle>
              <ListItemValue>R$ 12.000,00</ListItemValue>
              <ListItemContent>
                <ListItemContentTitle>Vendas</ListItemContentTitle>
                <ListItemContentDate>13/04/2020</ListItemContentDate>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle>Hamburgueria Pizzy</ListItemTitle>
              <ListItemValue expenses>- R$ 59,00</ListItemValue>
              <ListItemContent>
                <ListItemContentTitle>Alimentação</ListItemContentTitle>
                <ListItemContentDate>10/04/2020</ListItemContentDate>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle>Aluguel do apartamento</ListItemTitle>
              <ListItemValue expenses>- R$ 1.200,00</ListItemValue>
              <ListItemContent>
                <ListItemContentTitle>Casa</ListItemContentTitle>
                <ListItemContentDate>27/03/2020</ListItemContentDate>
              </ListItemContent>
            </ListItem>
          </List>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
