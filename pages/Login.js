import React from 'react';
import auth from '@react-native-firebase/auth';
import { ScrollView, View, Text, Button } from 'react-native';

const LoginPage = (props) => {
  const { signInUser } = props;
  const signIn = () => { // Move this to action thunk    
    auth()
      .signInWithEmailAndPassword('nu.maniphanh@gmail.com', 'password')
      .then((user) => {
        console.log(user);
      });
  };
  const signOut = () => auth().signOut();

  if (signInUser) {
    return (
      <ScrollView>
        <View>
          <Text>Hello user! {signInUser.email}</Text>
        </View>
        <View>
          <Button onPress={signOut} title="Sign out" color="#841584" />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <View>
        <Button onPress={signIn} title="Sign in" color="#841584" />
      </View>
      <View>
        <Text>No sign in.</Text>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
