// Header.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconstyle}>
          <Icon name="angle-left" size={30} color="#000" />
        </View>
        <View style={styles.textHeaderStyle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.lineViewStyle}>
        <View style={styles.innerLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFF',
    padding: 15,
    // alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  iconstyle: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeaderStyle: {
    width: '90%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineViewStyle: {
    height: 4,
    width: '90%',
    backgroundColor: '#F0F7F5',
  },
  innerLine: {
    height: 4,
    width: '38%',
    backgroundColor: '#339E72',
  },
});

export default Header;
