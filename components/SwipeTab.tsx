import Index from "@/app/(tabs)";
import About from "@/app/(tabs)/about";
import Swiper from "react-native-screens-swiper";

export default function SwipeTab() {
  const data = [
    {
      tabLabel: "Home",
      component: Index,
    },
    {
      tabLabel: "About",
      component: About,
    },
  ];

  return <Swiper data={data} style={styles} />;
}

const styles = {
  pillButton: {
    backgroundColor: "white",
  },
  pillActive: {
    backgroundColor: "yellow",
  },
  pillLabel: {
    color: "gray",
  },
  activeLabel: {
    color: "white",
  },
};
