// store.js

import { createStore ,combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_SWITCH_STATE = 'SET_SWITCH_STATE';
const SET_IMAGE_URL = 'SET_IMAGE_URL';
const SET_UNIT_SIZE = 'SET_UNIT_SIZE';
const SET_ELECTRICITY_METER = 'SET_ELECTRICITY_METER';
const SET_WATER_METER = 'SET_WATER_METER';

// Action creators
export const increment = (counterName) => ({
  type: INCREMENT,
  payload: { counterName },
});

export const decrement = (counterName) => ({
  type: DECREMENT,
  payload: { counterName },
});
export const setSwitchState = (buttonName, value) => ({
    type: SET_SWITCH_STATE,
    payload: { buttonName, value },
  });
  export const setUnitSize = (size) => ({
    type: SET_UNIT_SIZE,
    payload: size,
  });
  
  export const setElectricityMeter = (meter) => ({
    type: SET_ELECTRICITY_METER,
    payload: meter,
  });
  
  export const setWaterMeter = (meter) => ({
    type: SET_WATER_METER,
    payload: meter,
  });
  export const setImageURL = (url) => ({
    type: SET_IMAGE_URL,
    payload: url,
  });

// Reducer
const initialState = {
  Bedrooms: 0,
  Bathrooms: 0,
  GuestRooms: 0,
  Lounges: 0,

};
const initialStateButton = {
    Furnished: 'No',
    Kitchen: 'Open',
    Parking: 'Central',
    SelectAcType: 'Split',
  };
  const initialStateInput = {
    unitSize: '',
    electricityMeter: '',
    waterMeter: '',
  };
  const initialStateImage = {
    imgURL: '',
  };
const counterReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case INCREMENT:
      return { ...state, [action.payload.counterName]: state[action.payload.counterName] + 1 };
    case DECREMENT:
        
      return { ...state, [action.payload.counterName]: state[action.payload.counterName] - 1 };
   
    default:
      return state;
  }
};   
const switchButtonsReducer = (state = initialStateButton, action) => {
    switch (action.type) {
      case SET_SWITCH_STATE:
        return { ...state, [action.payload.buttonName]: action.payload.value };
      default:
        return state;
    }
  };
  const InputReducer = (state = initialStateInput, action) => {
    switch (action.type) {
      case SET_UNIT_SIZE:
        return { ...state, unitSize: action.payload };
      case SET_ELECTRICITY_METER:
        return { ...state, electricityMeter: action.payload };
      case SET_WATER_METER:
        return { ...state, waterMeter: action.payload };
      default:
        return state;
    }
  };
  const ImageReducer = (state = initialStateImage, action) => {
    console.log('Action:', action);
  console.log('State before:', state);
    switch (action.type) {
      case SET_IMAGE_URL:
        return { ...state, imgURL: action.payload };
      default:
        return state;
    }
  };
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const rootReducer = combineReducers({
    counters:counterReducer,
    switchButtons: switchButtonsReducer,
    Inputs:InputReducer,
    imgURL:ImageReducer,
  });
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Create Redux store
// const store = createStore(rootReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);
// const store = createStore(counterReducer
//     );



export default store;
