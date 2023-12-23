// TwoButtonsPage.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonsPage = () => {
  const handleButton1Press = () => {
    // Implement the action for the first button press
    console.log('Button 1 pressed');
  };

  const handleButton2Press = () => {
    // Implement the action for the second button press
    console.log('Button 2 pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={handleButton1Press}>
        <Text style={styles.BackbuttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center',
    flexDirection:'row',
    marginTop:20
  },
  button: {
    backgroundColor: '#23AA6F',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width:150,
  
  },
  BackButton: {
    backgroundColor:'#FFF' ,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width:150,
    borderWidth:1,
    borderColor:'#23AA6F'
  
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign:'center'
  },
  BackbuttonText: {
    color: '#23AA6F',
    fontSize: 16,
    textAlign:'center'
  },
  
});

export default ButtonsPage;
