import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  GraidentLinear,
  BackgroundImage,
  TextBox,
  TouchableButton,
  Image,
} from '../../components';
import {PATH} from '../../assests/images';
import {
  COLOR,
  hp,
  setFontSize,
  FONTFAMILY,
  wp,
  setBorderRadius,
  setPadding,
  commonStyles,
  setWidth,
  setHeight,
} from '../../enums/StyeGuide';
import {CameraBlack, CameraWhite} from '../../assests/svg';
import { RNCamera } from 'react-native-camera';
const IdentityVerify = () => {

  const requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('External storage permissions granted');
        // Proceed with accessing the image file
      } else {
        console.log('External storage permissions denied');
        // Handle denial of permissions
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestExternalStoragePermission();
    // checkPersmission();
  }, []);
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data);
    }
  };
  return (
    <>
      <GraidentLinear>
        <View style={styles.imgbgContainer}>
          <BackgroundImage src={PATH.imggradient} style={styles.flex}>
            <TextBox text="Identity Verification" style={styles.screenname} />
          </BackgroundImage>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.personContainer}> 
      {/* <Image source={imgPath} style={styles.imageContainer} /> */}
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
      />
       </View>
          <TouchableButton
            style={styles.cameraButton}
            onPress={takePicture}>
            <CameraBlack />
          </TouchableButton>
        </View>
      </GraidentLinear>
    </>
  );
};

export default IdentityVerify;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  preview: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  imgbgContainer: {
    height: hp(35),
  },
  screenname: {
    marginTop: hp(6),
    marginLeft: wp(5),
    width: wp(65),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  mainContainer: {
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(-2),
    // borderWidth:2,
  },
  personContainer: {
    // borderWidth: 1,
    ...commonStyles.shadow,
    height: hp(40),
    ...setBorderRadius(25),
    overflow:'hidden'
  },
  cameraButton: {
    ...setHeight(80),
    ...setWidth(80),
    ...setBorderRadius(100),
    backgroundColor: COLOR.purple_thin,
    ...commonStyles.shadow,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: hp(5),
  },
  cameraOpenView: {
    position: 'absolute',
    bottom: 0,
    left: wp(40),
  },
  takePictureStyle: {
    ...setWidth(60),
    ...setHeight(60),
    ...setBorderRadius(30),
    backgroundColor: 'purple',
    alignSelf: 'center',
    ...commonStyles.center,
  },
  imageContainer: {
    height: hp(40),
    width: wp(85),
    ...setBorderRadius(25),
  },
});
