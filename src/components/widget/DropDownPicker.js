import React, {useState,memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {ArrowDown, LineIcon} from '../../assests/svg';
import {
  COLOR,
  wp,
  hp,
  setBorderRadius,
  setFontSize,
  FONTFAMILY,
  commonStyles,
  setPadding,
} from '../../enums/StyeGuide';
import {TextBox, TouchableButton} from '../reusable';
const DropDown = ({
  items,
  iconComponent,
  iconSize,
  style,
  containerStyle,
  dropdownTextStyle,
  placeholder,
  onItemSelected
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleSelectItem = value => {
    setSelectedValue(value);
    setShowDropDown(false);
    if (onItemSelected) {
      onItemSelected(value);
    }
  };
  return (
    <View style={[styles.container, style]}>
      <TouchableButton style={styles.row} onPress={toggleDropDown}>
        {iconComponent &&
          React.cloneElement(iconComponent, {
            width: iconSize,
            height: iconSize,
          })}
        {iconComponent && <LineIcon style={styles.lineIcon} width={10} />}
        <View style={[styles.dropdownButton,!iconComponent && styles.mLeft]}>
          <TextBox
            style={dropdownTextStyle}
            text={selectedValue || placeholder}
          />
            <ArrowDown style={{marginTop:hp(0.4)}} height={15} width={15} />
        </View>
      </TouchableButton>
      {showDropDown && (
        <View style={[styles.dropdown, containerStyle]}>
          {items.map(item => (
            <TouchableButton
              key={item.value}
              onPress={() => handleSelectItem(item.value)}
              style={styles.item}>
              <TextBox style={styles.dropdownText} text={item.value} />
            </TouchableButton>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    borderColor: COLOR.grey_light,
  },
  row: {
    paddingLeft: wp(5),
    flexDirection: 'row',
    ...commonStyles.betweenCenter,
  },
  dropdownButton: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...setPadding(10),
    ...setBorderRadius(5),
  },
  dropdown: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: hp(5),
    width: wp(25),
    ...setBorderRadius(15),
    ...commonStyles.shadow,
  },
  item: {
    ...setPadding(10),
  },
  dropdownText: {
    ...setFontSize(12),
    fontWeight: '600',
    fontFamily: FONTFAMILY.poppins_medium,
  },
  mLeft:{
    paddingLeft:30
  },
  lineIcon:{
    marginLeft:wp(2),
    // marginTop:hp(6),
  }
});

export default memo(DropDown);
