import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {
  AccessToken,
  Profile,
  LoginManager,
} from 'react-native-fbsdk-next';
import {
  hp,
  FONTFAMILY,
  COLOR,
  setFontSize,
  wp,
  commonStyles,
  setBorderRadius,
  SVGSIZE,
} from '../../enums/StyeGuide';
import {
  TextBox,
  InputText,
  BackgroundImage,
  TouchableButton,
  GradientButton,
  BarStatus,
  GraidentLinear,
  Loader,
} from '../../components';
import {PATH} from '../../assests/images';
import {
  HorizontalLine,
  MailIcon,
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
} from '../../assests/svg/index';
import En from '../../locals/En';
import {SCREEN} from '../../enums/AppEnums';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSignInWithEmailAndPassword} from '../../hooks/auth';
import auth from '@react-native-firebase/auth';
import { useUser } from '../../context/AppStates';
const LoginScreen = ({navigation}) => {
  const {getUserID}= useUser();
  useEffect(() => {
    console.log(getUserID)
    if(getUserID){
      navigation.navigate(SCREEN.ACCOUNTDETAIL)
    }
  }, [loading])
  
  const {loginUser, loading} = useSignInWithEmailAndPassword();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignin = () => {
    loginUser(email, password);
    // navigation.navigate(SCREEN.HOMESCREEN)
  };
  async function signInWithGoogle() {
    GoogleSigninFunc()
      .then(data => {

        console.log('user data', data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const GoogleSigninFunc = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.configure({
        webClientId:
          '165612299024-0lauu1g5f9ugb49rj9c9po9fag9o9grl.apps.googleusercontent.com',
        offlineAccess: true,
        hostedDomain: '',
        forceCodeForRefreshToken: true,
        accountName: '',
      });
      console.log('beofre sign in');
      const userInfo = await GoogleSignin.signIn();
      console.log('Enter sign');
      const {idToken} = await GoogleSignin.signIn();
      console.log('token verifeid');
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      console.log('all d');
      await auth().signInWithCredential(googleCredentials);
      console.log('all dd');
      return userInfo;
    } catch (error) {
      console.log(error);
      console.log(error.code);
    }
  };
  const googleSignOut = async () => {
    try {
      console.log('o');
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['email']);
  
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
  
        if (data) {
          console.log('Access token:', data.accessToken.toString());
  
          // Fetch user data from Facebook
          const response = await fetch(
            `https://graph.facebook.com/me?fields=email&access_token=${data.accessToken}`
          );
  
          if (response.ok) {
            const userData = await response.json();
            console.log('User data:', userData);
  
            // Now you can use the user data or proceed with Firebase authentication
            // For example, you can create a Firebase credential and sign in the user
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            await auth().signInWithCredential(facebookCredential);
          } else {
            console.log('Error fetching user data:', response.status);
          }
        }
      }
    } catch (error) {
      console.error('Facebook login error:', error);
    }
  };
  return (
    <GraidentLinear>
      {loading && <Loader />}
      <View style={styles.imgbgContainer}>
        <BackgroundImage src={PATH.imggradient} style={{flex: 1}}>
          <TextBox text="Login" style={styles.screenname} />
        </BackgroundImage>
      </View>
      <ScrollView style={{marginTop: hp(-7)}}>
        <InputText
          style={styles.inputContainer}
          iconSize={SVGSIZE.md}
          iconComponent={<MailIcon />}
          placeholder={En.email}
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <BarStatus bg={COLOR.blue_dark} />
        <InputText
          style={styles.passwordContainer}
          placeholder={En.pass}
          isPassword={true}
          value={password}
          onChangeText={e => setPassword(e)}
        />
        <TouchableButton>
          <TextBox style={styles.forgetPassword} text={En.forgotpass} />
        </TouchableButton>
        <GradientButton
          text="Log In"
          style={{marginTop: hp(2.1)}}
          onPress={handleSignin}
        />
        <View style={styles.linesContainer}>
          <HorizontalLine />
          <TextBox style={styles.continueWith} text={En.conWith} />
          <HorizontalLine />
        </View>
        <View style={styles.iconsContainer}>
          <TouchableButton style={styles.iconBox} onPress={signInWithGoogle}>
            <GoogleIcon />
          </TouchableButton>
          <TouchableButton style={styles.iconBox} onPress={handleFacebookLogin}>
            <FacebookIcon />
          </TouchableButton>
          <TouchableButton style={styles.iconBox}>
            <AppleIcon />
          </TouchableButton>
        </View>
      </ScrollView>
    </GraidentLinear>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexFull,
  },
  imgbgContainer: {
    height: hp(35),
  },
  screenname: {
    marginTop: hp(6),
    marginLeft: wp(5),
    width: wp(60),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  loginTopText: {
    marginTop: hp(6),
    marginLeft: wp(8),
    color: COLOR.white,
    ...setFontSize(40),
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  inputContainer: {
    paddingLeft: wp(4),
    marginTop: hp(8),
    alignSelf: 'center',
  },
  passwordContainer: {
    paddingLeft: wp(5),
    ...commonStyles.border,
    marginTop: hp(5),
    ...commonStyles.center,
  },
  forgetPassword: {
    marginTop: hp(1),
    marginRight: wp(12),
    alignSelf: 'flex-end',
  },
  linesContainer: {
    flexDirection: 'row',
    ...commonStyles.center,
    marginTop: hp(15),
  },
  continueWith: {
    marginRight: wp(1),
    marginLeft: wp(1),
    color: COLOR.black,
    fontFamily: FONTFAMILY.poppins_medium,
    fontWeight: '500',
  },
  iconsContainer: {
    flexDirection: 'row',
    ...commonStyles.center,
    marginTop: hp(5),
  },
  iconBox: {
    padding: wp(8),
    ...commonStyles.center,
    width: wp(3),
    height: hp(3),
    borderRadius: 100,
    backgroundColor: COLOR.white,
    ...commonStyles.shadow,
    marginRight: wp(3),
  },
});
