import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 25px 25px 30px;
  background: #5636d3;
  height: 105px;
`;

export const Logo = styled.TouchableOpacity`
  margin-right: 25px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 15px;
  color: #fff;
  opacity: 0.6;
`;
