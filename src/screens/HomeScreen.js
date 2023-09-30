import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {/*moram ubaciti sve  ...ostali elementi ekrana... */}
      <Button
        title="Prijavi problem"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
