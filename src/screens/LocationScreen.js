import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // koristim MapView za prikaz mape

const LocationScreen = ({ navigation }) => {
  // Definišite state za lokaciju korisnika
  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  // Funkcija za označavanje lokacije na mapi
  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
  };

  // Funkcija za nastavak na sledeći ekran
  const handleNext = () => {
    // Moram ubaciti logiku da se spasava lokacija
    navigation.navigate('Description');
  };

  return (
    <View style={styles.container}>
      <Text>Označite lokaciju problema na mapi:</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Lokacija problema"
          description="Ovdje se nalazi problem"
        />
      </MapView>
      <Button title="Dalje" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: 300,
  },
});

export default LocationScreen;
