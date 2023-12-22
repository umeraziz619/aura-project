import {StyleSheet, View} from 'react-native';
import React, {useState,memo} from 'react';
import {Image, TouchableButton} from '../reusable';
import {
  hp,
  setHeight,
  setWidth,
  setBorderRadius,
  commonStyles,
  COLOR,
  wp,
  SVGSIZE,
} from '../../enums/StyeGuide';
import {CameraIcon, NullImage} from '../../assests/svg';
import ImagePicker from 'react-native-image-crop-picker';
import { useUser } from '../../context/AppStates';
import storage from '@react-native-firebase/storage'
const PickImage = ({style,imageLink}) => {
  // const {getUserID} = useUser();

  const [image, setImage] = useState();
  const openImagePicker = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      if(imageLink){
        imageLink(image.path)
      }
      setImage(image.path);
      // uploadUserImage(getUserID,image.path)
    });
  };
  // const uploadUserImage = async (userId, imageUri) => {
  //   try {
  //     const storageRef = storage().ref(`usersprofile/${userId}.jpg`);
  //     await storageRef.putFile(imageUri);
  //     console.log('Image uploaded successfully!');
  //     // Additional logic after successful upload if needed
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     // Handle error scenarios here
  //   }
  // };
  
  // Function to get user image
  const getUserImage = async (userId) => {
    try {
      const storageRef = storage().ref(`${userId}.jpg`);
      const url = await storageRef.getDownloadURL();
      console.log('Image URL:', url);
      // Use the URL to display the image or perform further operations
      // For example, you can set the retrieved URL to the state in a React component to display the image
      // setState({ imageUrl: url });
    } catch (error) {
      console.error('Error getting user image:', error);
      // Handle error scenarios here
    }
  };
  return (
    <View style={[styles.imgPicker,style]}>
      {image ? (
        <Image source={{uri: image}} style={styles.img} />
      ) : (
        <NullImage style={styles.icon} height={SVGSIZE.mlg} width={SVGSIZE.mlg} />
      )}
      <TouchableButton onPress={openImagePicker} style={styles.cameraIcon}>
        <CameraIcon height={SVGSIZE.esm} width={SVGSIZE.esm} />
      </TouchableButton>
    </View>
  );
};

export default memo(PickImage);

const styles = StyleSheet.create({
  imgPicker: {
    marginTop: hp(-4),
    alignSelf: 'center',
    ...setHeight(100),
    ...setWidth(100),
    ...setBorderRadius(100),
    backgroundColor: COLOR.white_light,
    ...commonStyles.shadow,
    ...commonStyles.border,
    borderColor: COLOR.grey_extralight,
  },
  img: {
    ...commonStyles.flexFull,
    ...setBorderRadius(100),
  },
  icon: {
    marginTop: hp(4),
    alignSelf: 'center',
  },
  cameraIcon: {
    backgroundColor: COLOR.white,
    ...setHeight(20),
    ...setWidth(20),
    position: 'absolute',
    right: wp(3),
    bottom: hp(0),
    ...setBorderRadius(100),
    ...commonStyles.center,
    ...commonStyles.shadow,
  },
});
