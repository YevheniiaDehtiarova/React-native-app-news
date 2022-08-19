import { StyleSheet } from "react-native-web";
import * as Font from "expo-font";
import  AppLoading  from "expo-app-loading";
import { useState } from "react";
import  MainStack  from "./navigate";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("././assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "mt-light": require("././assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return <MainStack/>;
  } else {
    return <AppLoading
    startAsync={fonts} 
    onFinish={() => setFont(true)}
    onError = {console.warn}
     />;
  }
}

const styles = StyleSheet.create({});
