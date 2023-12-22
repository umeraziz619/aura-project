import React, {useState,useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {hp, FONTFAMILY, COLOR, width,setFontSize, wp,commonStyles,setBorderRadius} from '../../enums/StyeGuide';
import { GradientButton,BackgroundImage,TextBox,TouchableButton } from '../../components';// import GradientButton from '../../components/reusable/GradientButton';
import {SCREEN} from '../../enums/AppEnums';
import { slides } from '../../enums/DummyData';
import En from '../../locals/En';
import auth from '@react-native-firebase/auth'
import { useUser } from '../../context/AppStates';
const OnBoardingScreen = ({navigation}) => {
  const {updateUserId} = useUser();
  const currentUser = auth()?.currentUser?.uid;
  useEffect(() => {
    if(currentUser){
      updateUserId(currentUser);
      navigation.navigate(SCREEN.ACCOUNTDETAIL)
    }else{
      navigation.navigate(SCREEN.LOGIN);
    }
  }, [])
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = React.createRef();
  const handlePagination = index => {
    scrollViewRef.current.scrollTo({x: index * width});
    // setCurrentPage(index);
  };
  const renderPagination = () => {
    return slides.map((_, index) => (
      <TouchableButton
        key={index}
        style={[
          styles.paginationDot,
          currentPage === index && styles.activeDot,
        ]}
      />
    ));
  };
  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const currentIndex = Math.round(
            offsetX / width,
          );
          setCurrentPage(currentIndex);
        }}>
        {slides.map((slide,index) => (
          <BackgroundImage key={index} src={slide.img} style={styles.imgBackground}>
            <TextBox style={styles.logoText} text={En.app_name} />
            <View key={slide.id} style={styles.slide}>
              <TextBox style={styles.title} text={slide.title} />
              <TextBox style={styles.description} text={slide.description} />
              <GradientButton
                text={En.nextButton}
                style={styles.button}
                onPress={() => {
                  if (currentPage === slides.length - 1) {
                    navigation.replace(SCREEN.AUTHLANDING);
                  } else {
                    handlePagination(currentPage + 1);
                  }
                }}
                />
            </View>
          </BackgroundImage>
        ))}
      </ScrollView>
      <View style={styles.pagination}>{renderPagination()}</View>
</>
  );
};
const styles = StyleSheet.create({
  slide: {
    width: width,
    paddingHorizontal: wp(5),
  },
  title: {
    ...setFontSize(24),
    fontWeight: 'bold',
    marginBottom: hp(1),
    marginTop: hp(1),
    color: COLOR.white,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  description: {
    ...setFontSize(15),
    textAlign: 'left',
    color: COLOR.white,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  pagination: {
    position:'absolute',
    top:hp(68),
    left:hp(2.5),
    flexDirection: 'row',
    ...commonStyles.center,
    borderColor: COLOR.white,
    // alignSelf: 'flex-start',
  },
  paginationDot: {
    width: wp(5),
    height:hp(1),
    ...setBorderRadius(2),
    backgroundColor: COLOR.grey_extralight,
    marginHorizontal: wp(1),
  },
  activeDot: {
    width:wp(6),
    backgroundColor: COLOR.black_light,
  },
  button: {
    height: hp(7),
    marginTop:hp(1),
    marginBottom:hp(3),
    ...setBorderRadius(20),
  },
  imgBackground: {
    ...commonStyles.flexFull,
    ...commonStyles.flexEnd,
  },
  logoText: {
    color: COLOR.white,
    position: 'absolute',
    right: wp(3),
    top:  wp(3),
    color: COLOR.white,
    fontFamily: FONTFAMILY.poppins_semibold,
    ...setFontSize(15),
  },
});

export default OnBoardingScreen;
