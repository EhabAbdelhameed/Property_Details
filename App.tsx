import React from 'react';

import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/store/store';
import Counter from './src/components/Counter';
import store from './src/store/store';
import SwitchSelectionButton from './src/components/SwitchSelectionButton';
import AccessPhoto from './src/photo/AccessPhoto';
import InputComponent from './src/components/Inputs';
import ButtonsPage from './src/components/Buttons';
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
          <Header title={'Property Details'} />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.contantContainer}>
              <View style={styles.TitleStyle}>
                <Text style={styles.TitleText}>Step 1 - Unit Details</Text>
                <Text style={styles.SubTitle}>
                  Please enter the unit information below
                </Text>
              </View>
              <InputComponent InputName={'Unit Size'} />
              <View style={styles.containerCounter}>
                <View style={styles.counterStyle}>
                  <Counter counterName="Bedrooms" />
                  <Counter counterName="Bathrooms" />
                </View>
                <View style={styles.counterStyle}>
                  <Counter counterName="GuestRooms" />
                  <Counter counterName="Lounges" />
                </View>
              </View>
              <View style={styles.containerCounter}>
                <View style={styles.counterStyle}>
                  <SwitchSelectionButton
                    buttonName="Furnished"
                    options={['Yes', 'No']}
                  />
                  <SwitchSelectionButton
                    buttonName="Kitchen"
                    options={['Closed', 'Open']}
                  />
                </View>
                <SwitchSelectionButton
                  buttonName="Parking"
                  options={['Split', 'Central']}
                />
              </View>
              <InputComponent InputName={'Electricity Meter No'} />
              <InputComponent InputName={'Water Meter No'} />
              <View style={styles.containerCounter}>
                <SwitchSelectionButton
                  buttonName="SelectAcType"
                  options={['Split', 'Central', 'Window', 'Not Installed']}
                />
              </View>
              <AccessPhoto />
              <ButtonsPage />
            </View>
          </ScrollView>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contantContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCounter: {
    width: '90%',
  },
  counterStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  TitleStyle: {
    width: '90%',
    marginTop: 15,
    marginBottom: 10,
  },
  TitleText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  SubTitle: {
    fontSize: 14,
    color: '#81BEA9',
  },
});

export default App;
