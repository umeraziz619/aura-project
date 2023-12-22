import {StyleSheet,View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../../enums/AppEnums';
import { Auralogo } from '../../assests/svg';
import { FLEX, commonStyles } from '../../enums/StyeGuide';
const SplashScreen = () => {
  const navigaton = useNavigation();
  setTimeout(() => {
    navigaton.replace(SCREEN.ONBOARDING);
  }, 2000);
  return (
    <View style={styles.container}>
      <Auralogo />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexFull,
    ...commonStyles.center
  },
});
