import React from 'react';
import auth from '@react-native-firebase/auth';
import {ScrollView, View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {LOGIN_SUCCESS, LOGIN_FAILED, LOG_OFF} from './actionTypes';

const LoginView = (props) => {
  const {signIn, signOut, user, status} = props;

  if (status === LOGIN_SUCCESS) {
    return (
      <ScrollView>
        <View>
          <Text>Hello user! {user.email}</Text>
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

const LoginPage = () => {
  const user = useSelector((state) => state.login.user);
  const status = useSelector((state) => state.login.status);
  const dispatch = useDispatch();

  const authenticator = auth();

  const signIn = () => {
    authenticator
      .signInWithEmailAndPassword('nu.maniphanh@gmail.com', 'password')
      .then((response) => dispatch({type: LOGIN_SUCCESS, user: response.user}))
      .catch((error) => dispatch({type: LOGIN_FAILED, error}));
  };

  const signOut = () =>
    authenticator.signOut().then(() => dispatch({type: LOG_OFF}));

  const props = {
    signOut,
    signIn,
    user,
    status,
  };

  return <LoginView {...props} />;
};

export default LoginPage;
