import React from 'react';
import {View} from 'react-native';
import {BarChart as RNBarChart} from 'react-native-gifted-charts';
import {barData} from '../../enums/DummyData';
const BarChart = () => {
  return (
    <View>
      <RNBarChart
        data={barData}
        barWidth={14}
        spacing={30}
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        noOfSections={5}
        maxValue={50}
        dashGap={20}
        lineBehindBars
        dashWidth={10}
        // yAxisOffset={10}
      />
    </View>
  );
};
export default BarChart;
