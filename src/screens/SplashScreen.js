import React from 'react';
import { View, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate('Registration'); // navigacija samo na ekran "Registration"
  };

  return (
    <View>
      <Button title="Počni" onPress={handleStart} />
    </View>
  );
};

export default SplashScreen;
