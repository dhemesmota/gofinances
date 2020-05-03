import styled, { css } from 'styled-components/native';

interface PropsCard {
  total?: boolean;
}

interface PropsList {
  expenses?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ScrollViewCard = styled.ScrollView`
  width: 100%;
  height: 200px;
  padding-right: 30px;
  margin-bottom: 40px;
`;

export const ContentCard = styled.View`
  position: relative;
  height: 160px;
  width: 100%;
  background: #5636d3;
  flex-direction: row;
  padding-left: 25px;
  padding-right: 9px;
`;

export const Card = styled.View<PropsCard>`
  background: #fff;
  padding: 20px 25px;
  border-radius: 5px;
  height: 200px;
  width: 300px;
  margin-right: 16px;
  justify-content: space-between;

  ${(props) =>
    props.total &&
    css`
      background: #ff872c;
    `}
`;

export const CardHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardHeaderTitle = styled.Text`
  font-family: 'Poppins-Regular';
  color: #363f5f;
  font-size: 15px;
`;

export const CardBody = styled.View`
  margin-bottom: 15px;
`;
export const CardBodyTitle = styled.Text`
  color: #363f5f;
  font-family: 'Poppins-Regular';
  font-size: 30px;
  line-height: 45px;
`;

export const CardBodySubTitle = styled.Text`
  color: #969cb3;
  font-family: 'Poppins-Regular';
  font-size: 13px;
  line-height: 18px;
`;

export const Content = styled.View`
  padding: 0 25px;
`;

export const Title = styled.Text`
  color: #000;
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 25px;
`;

export const List = styled.View``;

export const ListItem = styled.View`
  background: #fff;
  padding: 20px 25px;
  border-radius: 5px;
  width: 100%;
  min-height: 130px;
  margin-bottom: 16px;
`;

export const ListItemTitle = styled.Text`
  color: #363f5f;
  font-family: 'Poppins-Regular';
  line-height: 21px;
  font-size: 15px;
`;

export const ListItemValue = styled.Text<PropsList>`
  color: ${(props) => (props.expenses ? '#E83F5B' : '#12a454')};
  font-size: 22px;
  font-family: 'Poppins-Regular';
  margin-bottom: 20px;
`;

export const ListItemContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ListItemContentTitle = styled.Text`
  color: #969cb3;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
`;

export const ListItemContentDate = styled.Text`
  color: #969cb3;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
`;
