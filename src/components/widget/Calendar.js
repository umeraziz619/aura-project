import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useState} from 'react';
import {Calendar as RNCalendar,LocaleConfig} from 'react-native-calendars';
import {COLOR,commonStyles, hp} from '../../enums/StyeGuide';
const Calendar = () => {
  const [selected, setSelected] = useState('');
  const today = new Date().toISOString().split('T')[0];
  LocaleConfig.locales['en'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  };
  LocaleConfig.defaultLocale = 'en'; // Set the default locale
  return (
    <View style={{borderRadius: 30, overflow: 'hidden' }}>
    <RNCalendar
    style={{}}
    onDayPress={day => {
      setSelected(day.dateString);
    }}
    renderDay={(date, item) => {
      return (
        <View style={{flex: 1,}}>
            <Text style={{ color: item ? 'black' : 'gray',}}>
              {date.day}
            </Text>
          </View>
        );
      }}
      renderHeader={(date) => {
        const headerText = `${date.toString('MMMM yyyy')}`;
        return (
          <View style={{ alignItems: 'center', marginTop: 10}}>
            <Text style={{ fontSize: 12, fontFamily: 'YourHeaderFont', }}>
              {headerText}
            </Text>
          </View>
        );
      }}
      theme={{
        todayBackgroundColor: COLOR.purple_shade,
        todayTextColor: COLOR.black,
        textDayFontSize: 10, // Change the font size as needed
        // textDayFontFamily: 'YourFont', // Change to your preferred font family
        textDayHeaderFontSize: 10, 
        textSectionTitleFontSize: 20, // Adjust the font size for abbreviated day names
        'stylesheet.day.basic': {
          base: {
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            marginTop:hp(-1),
            borderRadius:100,
          },
          today: {},
          todayText: {backgroundColor:COLOR.purple_exlight,},
            selected: {},
            selectedText: { },
            disabled: {},
            disabledText: {color:"rgba(34, 33, 91, 0.3)"},
            nonTouchable: {},
          },
          // Adjust header text style here
          textSectionTitleColor: COLOR.black,
          // textSectionTitleFontSize: 30,
        }}

        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: COLOR.purple_light,
          },
          [today]: { // Mark today's date as "today"
            selected: true,
            disableTouchEvent: true,
            today: true,
            selectedColor:COLOR.purple_exlight,
            dotColor: COLOR.purple_light,
          },
        }}
        />
        </View>
  );
};

export default memo(Calendar);

const styles = StyleSheet.create({});
