import HomeScreen from "@/app/(tabs)";
import AboutScreen from "@/app/(tabs)/about";
import * as React from "react";
import { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const renderScene = SceneMap({
  first: HomeScreen,
  second: AboutScreen,
});

const routes = [
  { key: "first", title: "Home" },
  { key: "second", title: "About" },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
