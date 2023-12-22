import {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import En from '../locals/En';
import {COLOR, FONTFAMILY} from '../enums/StyeGuide';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../enums/AppEnums';
import {useUser} from '../context/AppStates';
import storage from '@react-native-firebase/storage'
// import { err } from 'react-native-svg';
// Function to create User
const useCreateUserWithEmailPassword = () => {
  const {updateUserId} = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const createUser = async (
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    userType,
  ) => {
    if (email === '' || password === '') {
      Snackbar.show({
        text: En.noempty,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLOR.blue_dark,
        fontFamily: FONTFAMILY.poppins_medium,
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Snackbar.show({
        text: 'Invalid email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLOR.blue_dark,
        fontFamily: FONTFAMILY.poppins_medium,
      });
    } else if (password != confirmPassword) {
      Snackbar.show({
        text: En.checkpass,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLOR.blue_dark,
        fontFamily: FONTFAMILY.poppins_medium,
      });
    } else {
      setLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          const user = res.user;
          updateUserId(user.uid);
          const userRef = firestore().collection('users').doc(user.uid);
          userRef.set({
            firstname: firstname,
            lastname: lastname,
            email: user.email,
            type: userType,
          });
          setLoading(false);
          Alert.alert(En.createsuccess);
          navigation.navigate(SCREEN.VERIFYNO);
        })
        .catch(err => {
          console.log(err);
          if (err.code === En.alreadyuse) {
            setLoading(false);
            Snackbar.show({
              text: err.code,
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: COLOR.blue_dark,
              fontFamily: FONTFAMILY.poppins_medium,
            });
          }
        });
    }
  };

  return {createUser, loading};
};

/// Function to sign in with the user
const useSignInWithEmailAndPassword = () => {
  const {updateUserId} = useUser();
  const [loading, setLoading] = useState(false);
  const loginUser = (email, password) => {
    if (email === '' || password === '') {
      Snackbar.show({
        text: En.noempty,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLOR.blue_dark,
        fontFamily: FONTFAMILY.poppins_medium,
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Snackbar.show({
        text: 'Invalid email',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: COLOR.blue_dark,
        fontFamily: FONTFAMILY.poppins_medium,
      });
    } else {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          updateUserId(res.user.uid);
          Alert.alert('Login Success!');
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          if (err.code) {
            Snackbar.show({
              text: 'Invalid email and password',
              duration: Snackbar.LENGTH_SHORT,
            });
          }
          if (err.code == 'auth/too-many-requests') {
            setLoading(false);
            Snackbar.show({
              text: 'Too many request Try Later',
              duration: Snackbar.LENGTH_SHORT,
            });
          }
        });
    }
  };

  return {loginUser, loading};
};
const useUserAccountDetails = () => {
  const {getUserID} = useUser();
  const [loading, setLoading] = useState(false);
  const accountDetails = async(image, category, bio, gender, location) => {
    // if (
    //   image == '' ||
    //   category == '' ||
    //   bio == '' ||
    //   gender == '' ||
    //   location == ''
    // ) {
    //   Snackbar.show({
    //     text: 'Please fill all the fields',
    //     duration: Snackbar.LENGTH_SHORT,
    //   });
    //   return
    // }
    // try {
    //   setLoading(true);
    //   const storageRef = storage().ref(`usersprofile/${getUserID}.jpg`);
    //   await storageRef.putFile(image);
    //   const url = await storageRef.getDownloadURL();
    //   console.log("image Upload successfully")
    //   const userDocRef = await firestore().collection('users').doc(getUserID);
    //   await userDocRef
    //     .set({
    //       profile:url,
    //       category:category,
    //       bio:bio,
    //       gender:gender,
    //       location:location,
    //     },{merge:true})
    //     setLoading(true);
    // } catch (error) {
    //   console.log(error)
    // }
    console.log('hello')
  };

  return {accountDetails, loading};
};


export {
  useCreateUserWithEmailPassword,
  useSignInWithEmailAndPassword,
  useUserAccountDetails
};
