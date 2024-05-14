import { Slot } from "expo-router";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function Layout() {
  const [fontsLoaded]  = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if(!fontsLoaded) {
    return null;
  }

  return fontsLoaded ? <Slot /> : null;
}