import React from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'; // Importujte GoogleSignin iz biblioteke

const LoginScreen = ({ navigation }) => {
  // Inicijalizujte GoogleSignin biblioteku
  GoogleSignin.configure({
    webClientId: 'YOUR_WEB_CLIENT_ID', // Dodajte svoj Web Client ID
  });

  // Funkcija za prijavu putem Google-a pa moram jos medo dodati ostale mogucnosti prijave
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // ubaciti logiku za prijavu korisnika na server
      // Nakon uspešne prijave, možete navigirati na sledeći ekran
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Prijavite se putem:</Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={handleGoogleLogin}
      />
    </View>
  );
};

export default LoginScreen;
