import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
// import Auth from '@react-native-firebase/auth';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import StringData from '@src/shared/strings';

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  formCenter: {
    justifyContent: 'center',
    flex: 1,
    margin: 25,
  },
  textInput: {
    marginBottom: 10,
    borderColor: 'gray',
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  bottomButton: {
    alignContent: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
  // buttonOutlined: {
  //   padding: 8,
  //   // color: 'white',
  //   borderWidth: 1,
  //   borderColor: 'lightgrey',
  //   borderRadius: 8,
  //   // textAlign: 'center',
  // },
});

type LoginNavigationProp = StackNavigationProp<ParamListBase, 'LOGIN'>;

interface Props {
  navigation: LoginNavigationProp;
}

const Login: React.FC<Props> = props => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    login: { noAccount, buttonText },
  } = StringData;

  const onSignUp = (): void => {
    // Auth().signInWithEmailAndPassword(email, password);
  };

  const handleSignUpPress = (): void => {
    navigation.navigate('Register');
  };

  const handleEmailChange = (txt: string): void => setEmail(txt);
  const handlePasswordChange = (txt: string): void => setPassword(txt);

  return (
    <View style={styles.center}>
      <View style={styles.formCenter}>
        <TextInput style={styles.textInput} placeholder="email" onChangeText={handleEmailChange} />
        <TextInput style={styles.textInput} placeholder="password" secureTextEntry onChangeText={handlePasswordChange} />

        <Button onPress={onSignUp} title={buttonText} />
      </View>

      <View style={styles.bottomButton}>
        <Text onPress={handleSignUpPress}>{noAccount}</Text>
      </View>
    </View>
  );
};

export default Login;
