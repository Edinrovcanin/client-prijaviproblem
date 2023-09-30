import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const DescriptionScreen = ({ navigation }) => {
  // Definišite state za unos opisa problema
  const [problemDescription, setProblemDescription] = React.useState('');

  // Funkcija za prijavu problema i navigaciju na sledeći ekran
  const handleReportProblem = () => {
    // Kada zavrsim server onda ovde ubaciti logiku za prijavu problema i slanje podataka na server
    // koristiti fetch() ili axios za slanje podataka
    // Nakon uspešne prijave, možete navigirati na sledeći ekran
    navigation.navigate('FinalScreen');
  };

  return (
    <View>
      <Text>Opis Problema:</Text>
      <TextInput
        placeholder="Unesite opis problema"
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
        multiline={true}
      />
      <Button title="Prijavi problem" onPress={handleReportProblem} />
    </View>
  );
};

export default DescriptionScreen;
