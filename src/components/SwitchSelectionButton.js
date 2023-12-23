import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {setSwitchState} from '../store/store';

const SwitchSelectionButton = ({buttonName, options}) => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(state => state.switchButtons[buttonName]);
  const {width, height} = useWindowDimensions();
  const handleOptionPress = item => {
    if (selectedOption !== item) {
      dispatch(setSwitchState(buttonName, item));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color:'#BBBBBB'}}>{buttonName=='SelectAcType'?'Select Ac Type':buttonName}</Text>
      <View style={[styles.contantContainer,{width: width /2.4}]}>  
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === item && styles.selectedOptionButton,
              {width: buttonName=='SelectAcType'?null:80}
            ]}
            onPress={() => handleOptionPress(item)}>
            <Text
              style={[
                styles.optionButtonText,
                selectedOption === item && styles.selectedOptionButtonText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
//    width:'100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contantContainer: {
    flexDirection: 'row',
   
  
    alignItems: 'center',
    marginVertical: 10,
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#FFF',
    height: 50,
    borderWidth:1,
    borderColor:'#E5E1E1',
    justifyContent: 'center',  
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#23AA6F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  selectedOptionButtonText: {
    color: 'white',
  },
});

export default SwitchSelectionButton;
