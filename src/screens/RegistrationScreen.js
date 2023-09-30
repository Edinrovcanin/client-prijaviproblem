import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  // Definišite state za podatke koje korisnik unosi
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [location, setLocation] = React.useState('');

  // Funkcija za obradu prijave problema
  const handleRegistration = () => {
    // moram ubaciti logiku za prijavu problema i slanje podataka na server
    // koristiti fetch() ili axios za slanje podataka
    // Nakon uspešne prijave, možete navigirati na sledeći ekran
    navigation.navigate('UploadImages'); // Ovo je primer, promenite naziv ekrana
  };

  return (
    <View>
      <Text>Naziv problema:</Text>
      <TextInput
        placeholder="Unesite naziv problema"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <Text>Opis problema:</Text>
      <TextInput
        placeholder="Unesite opis problema"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        multiline={true}
      />

      <Text>Lokacija problema:</Text>
      <TextInput
        placeholder="Unesite lokaciju problema"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Button title="Prijavi problem" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;
