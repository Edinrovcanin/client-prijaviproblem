import React from 'react';
import { View, Text, Button } from 'react-native';

const FinalScreen = ({ navigation }) => {
  // Funkcija za povratak na početni ekran ili neku drugu navigaciju
  const handleFinish = () => {
    // Implementirajte navigaciju na odgovarajući ekran
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Hvala vam na prijavi problema!</Text>
      <Button title="Završi" onPress={handleFinish} />
    </View>
  );
};

export default FinalScreen;
