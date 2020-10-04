import React from 'react';
import { Button, Container, Header, Text } from 'react-native-simple';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const { navigate } = useNavigation();
  return (
    <Container backgroundColor="primary">
      <Header>
        <Text fontSize="medium">Screen2</Text>
      </Header>

      <Button
        variant="filled"
        style={{ marginTop: 10 }}
        title="To screen 1"
        onPress={() => navigate('screen1')}
      />
    </Container>
  );
};

export default Screen1;
