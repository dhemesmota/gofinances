import styled, { css } from 'styled-components/native';

interface PropsBTN {
  select?: boolean;
  type: 'income' | 'outcome' | 'default';
}

const colorButtonSelect = {
  income: css`
    background: #d0dfd7;
    border-color: #d0dfd7;
  `,
  outcome: css`
    background: #e6d5d8;
    border-color: #e6d5d8;
  `,
  default: '',
};

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 25px;
`;

export const Title = styled.Text`
  color: #000;
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 25px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-family: 'Poppins-Regular';
  background: #fff;
  color: #969cb3;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity`
  background: #ff872c;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
`;

export const ButtonsContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.TouchableOpacity<PropsBTN>`
  background: transparent;
  height: 50px;
  flex: 1;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #e7e8ee;
  margin-bottom: 16px;

  ${(props) => props.select && colorButtonSelect[props.type]}
`;

export const BtnText = styled.Text`
  color: #363f5f;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 21px;
`;
