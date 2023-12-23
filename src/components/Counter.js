// Counter.js

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../store/store';

const Counter = ({counterName}) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counters[counterName]);

  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>
        {counterName == 'GuestRooms' ? 'Guest Rooms' : counterName}{' '}
      </Text>
      <View style={[styles.counterView, {width: width / 2.4}]}>
        <TouchableOpacity
          onPress={() => dispatch(decrement(counterName))}
          disabled={count == 0 ? true : false}
          style={styles.button}>
          <Text style={styles.buttonText}>ـــ</Text>
        </TouchableOpacity>

        <Text>{count}</Text>
        <TouchableOpacity
          onPress={() => dispatch(increment(counterName))}
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // backgroundColor:'red',
    marginVertical: 20,
    // justifyContent:'center',
    // alignItems:'center'
  },
  counterText: {
    fontSize: 18,
    marginBottom: 10,
    color:'#BBBBBB'
  },
  button: {
    backgroundColor: '#F7F7F7',
    // padding: 10,
    // margin: 5,
    // borderRadius: 5,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  counterView: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#EEECEC',
  },
});

export default Counter;
