import { Text, View, StyleSheet } from "react-native";
import { useAtom } from "jotai";
import { themeAtom } from "@/hooks/atom";

export default function AboutScreen() {
  const [theme] = useAtom(themeAtom);

  return (
    <View style={getStyles(theme).container}>
      <Text style={getStyles(theme).text}>ReactNativeのチュートリアル</Text>
    </View>
  );
}

const getStyles = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#25292e" : "#ffffff",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme === "dark" ? "#fff" : "#000",
    },
  });
