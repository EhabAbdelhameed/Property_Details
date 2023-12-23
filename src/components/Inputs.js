// InputComponent.js
import React from 'react';
import {View, TextInput, StyleSheet,Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUnitSize, setElectricityMeter, setWaterMeter} from '../store/store';

const InputComponent = ({InputName}) => {
  const dispatch = useDispatch();
  const {unitSize, electricityMeter, waterMeter} = useSelector(
    state => state.Inputs,
  );

  const handleUnitSizeChange = text => {
    dispatch(setUnitSize(text));
  };

  const handleElectricityMeterChange = text => {
    dispatch(setElectricityMeter(text));
  };

  const handleWaterMeterChange = text => {
    dispatch(setWaterMeter(text));
  };

  return (
    <View style={styles.container}>
         <Text style={{color:'#BBBBBB'}}>{InputName}</Text>
      <TextInput
        style={styles.input}
        placeholder={
          InputName === 'Unit Size'
            ? 'Enter Size'
            : InputName === 'Electricity Meter No'
            ? 'Electricity Meter No'
            : 'Water Meter No'
        }
        value={
          InputName === 'Unit Size'
            ? unitSize
            : InputName === 'Electricity Meter No'
            ? electricityMeter
            : waterMeter
        }
        onChangeText={
          InputName === 'Unit Size'
            ? handleUnitSizeChange
            : InputName === 'Electricity Meter No'
            ? handleElectricityMeterChange
            : handleWaterMeterChange
        }
        keyboardType='numeric'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width:'90%'
  },
  input: {
    height: 50,
    borderColor: '#BBBBBB',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default InputComponent;
