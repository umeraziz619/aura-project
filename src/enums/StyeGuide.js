import {Dimensions, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const COLOR = {
  white: '#ffffff',
  white_light:'#f4f4f4',
  black: '#000000',
  blue_dark: '#6A50B2',
  blue_status:"#6460bb",
  purple_light:"#DED3FF",
  purple_exlight:"#EAEDFF",
  blue_light: '#4F99DD',
  blue_fill:"#00008b",
  grey_light: 'rgba(0, 0, 0, 0.3)',
  grey_extralight: 'rgba(217, 217, 217, 0.5)',
  grey_md:"#8B8B8B",
  grey_esm:"#898989",
  black_light: '#D9D9D9',
  light_shade:'#f0f2ff',
  purple_thin:"#cbbaff",
  purple_extrasm:"#d4daf7",
  purple_shade:"#ccbef7",
  green_medium:"#25BB00",
  success:"#43D310",
  danger:"#D31010",
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const commonStyles = StyleSheet.create({
  endCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  startStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  startCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  startEnd: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  centerStart: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerEnd: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  endStart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  endCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  endEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  flexEnd:{
    justifyContent:'flex-end',
  },
  betweenCenter:{
    justifyContent:'space-between',
    alignItems:'center',
  },
  aroundCenter:{
    justifyContent:'space-around',
    alignItems:'center',
  },
  evenlyCenter:{
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  flexFull: {
    flex: 1,
  },
  border:{
    borderWidth:1,
  },
  bordermd:{
    borderWidth:2,
  },
  shadow:{
    elevation: 3,
    shadowColor: COLOR.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  shadow_5: {
    elevation: 5,
    shadowColor: COLOR.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
shadow_3: {
    elevation: 3,
    shadowColor: COLOR.black,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
},
shadow_10: {
    elevation: 10,
    shadowColor: COLOR.black,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
},
});

const FONTFAMILY = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extralight: 'Poppins-ExtraLight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-SemiBold',
  poppins_thin: 'Poppins-Thin',
};

// StyleSheet Functions
const setHeight = heightValue => {
  return {
    height: heightValue,
  };
};
const setWidth = widthValue => {
  return {
    width: widthValue,
  };
};
const setFontSize = fontValue => {
  return {
    fontSize: fontValue,
  };
};
const setBorderRadius = borderValue => {
  return {
    borderRadius: borderValue,
  };
};
const setPadding = paddingValue => {
  return {
    padding: paddingValue,
  };
};
const SVGSIZE={
  esm:12,
  md:20,
  mlg:40,
  elg:50,
}
export {
  FONTFAMILY,
  COLOR,
  width,
  height,
  wp,
  hp,
  commonStyles,
  setHeight,
  setWidth,
  setFontSize,
  setBorderRadius,
  SVGSIZE,
  setPadding,
};
