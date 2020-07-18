import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { setDemo } from '_slices/app';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { selectDemo } from '_selectors/app';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const dispatch = useDispatch();
  const demo = useSelector(selectDemo);
  const { navigate } = useNavigation();

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={async () => {
          dispatch(setDemo(!demo));
        }}
      >
        <Text style={{ alignSelf: 'center', marginVertical: 20 }}>
          Switch demo reducer
        </Text>
      </TouchableWithoutFeedback>

      <Text style={{ fontSize: 30, alignSelf: 'center' }}>
        {demo ? 'True' : 'False'}
      </Text>

      <Button
        title="To screen 2"
        containerStyle={{
          width: '70%',
          alignSelf: 'center',
          marginTop: 50,
        }}
        onPress={() => navigate('screen2')}
      />
    </View>
  );
};

export default Screen1;
