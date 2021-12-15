import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function App() {
  return (
    // Try setting `justifyContent` to 'flex-start'/'flex-end'/'center'/'space-between'/'space-around'
    // Try playing with the flexWrap property 'wrap', 'nowrap', 'wrap-reverse'
    //‘flex-start’/’center’/’flex-end’/’stretch’/’space-between’/’space-around’
    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        //width={220}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({
  green: {
    backgroundColor: "#32B76C",
    height: 100,
    width: 50,
  },
  yellow: {
    backgroundColor: "#FAA030",
    height: 100,
    width: 50,
  },
  red: {
    backgroundColor: "#EE2C38",
    height: 100,
    width: 50,
  },
  blue: {
    backgroundColor: "#4196E0",
    height: 100,
    width: 50,
  },
  cyan: {
    backgroundColor: "#32BABC",
    height: 100,
    width: 50,
  },
  purple: {
    backgroundColor: "#A0138E",
    height: 100,
    width: 50,
  },
  violet: {
    backgroundColor: "#733CA6",
    height: 100,
    width: 50,
  },
  container: {
    marginTop: 48,
    flex: 1,
  },
  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "300",
    marginBottom: 24,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ecf5fd",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
});
("");
