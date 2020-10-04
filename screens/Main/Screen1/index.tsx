import React from 'react';
import { Button, Container, Header, Text } from 'react-native-simple';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { switchDarkMode } from '_slices/app';

const Screen1 = () => {
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  return (
    <Container backgroundColor="primary">
      <Header>
        <Text fontSize="medium">Screen1</Text>
      </Header>
      <Button
        style={{ marginTop: 10 }}
        variant="filled"
        title="Switch dark mode"
        onPress={() => {
          dispatch(switchDarkMode());
        }}
      />

      <Button
        variant="filled"
        style={{ marginTop: 10 }}
        title="To screen 2"
        onPress={() => navigate('screen2')}
      />
    </Container>
  );
};

export default Screen1;
