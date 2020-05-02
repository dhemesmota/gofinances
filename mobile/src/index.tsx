import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'Poppins-Medium' }}>Hello world!!!</Text>
      <Icon name="arrow-up-circle" size={40} color="#000" />
    </View>
  </>
);

export default App;
