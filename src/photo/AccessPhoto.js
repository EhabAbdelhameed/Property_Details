import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {setImageURL} from '../store/store';

const AccessPhoto = () => {
  const dispatch = useDispatch();
  const imgURL = useSelector(state => state.imgURL);

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        dispatch(setImageURL(response.assets[0].uri));
       
      }
    });
  };

  const openGallery = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // The selected media is available in the result.uri
      dispatch(setImageURL(result[0].uri));
     
    

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('DocumentPicker Error:', err);
      }
    }
  };

  return (
    <View>
      <Text
        style={{
          color: '#BBBBBB',
          marginTop: 20,
          marginBottom: 10,
          fontSize: 16,
        }}>
        Upload Photo
      </Text>
      <View style={styles.container}>
        {console.log('000000000' + JSON.stringify(imgURL.imgURL))}
        <Image
          resizeMode="cover"
          style={[
            styles.img,
            {
              width: imgURL && imgURL.imgURL ? 280 : 100,
              height: imgURL && imgURL.imgURL ? 280 : 100,
            },
          ]}
          source={
            imgURL && imgURL.imgURL
              ? {
                  uri: imgURL.imgURL,
                }
              : require('../assets/prodImg.png')
          }
        />
        {imgURL && imgURL.imgURL ? null : (
          <Text style={{fontSize: 10, marginBottom: 20, color: '#BBBBBB'}}>
            Select Photo from your gallery
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.cameraBtn} onPress={openCamera}>
            <Text style={styles.textBtn}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraBtn} onPress={openGallery}>
            <Text style={styles.textBtn}>Choose File</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 300,
    borderColor: '#BBBBBB',
  },
  img: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  cameraBtn: {
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: '#EEFFF7',
    marginTop: 20,
  },
  textBtn: {
    color: '#23AA6F',
  },
});

export default AccessPhoto;
