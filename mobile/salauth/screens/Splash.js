import { React } from "react";
import {Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
<<<<<<< HEAD:mobile/salauth/screens/HomeScreen.js
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';

function HomeScreen() {

  let [fontsLoaded] = useFonts({
    Goldman_400Regular,
    Goldman_700Bold,
  });

=======
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';


function Splash({navigation}) {

  let fontsLoaded = async() => {
    await useFonts({Goldman_400Regular, Goldman_700Bold});
  };

>>>>>>> 1990faf (nagivation, bottom navbar, and screen templates):mobile/salauth/screens/Splash.js
    return (
      <SafeAreaView style={styles.page}>
        <Image 
            source = {require("../assets/salauth.png")}
            style = {styles.backgroundImage}
        />
        <Text style={styles.appName}>Salauth</Text>
  
        <View style={styles.parent}>
          <Pressable
            style={styles.signInbutton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.text}>Sign In</Text>
          </Pressable>
  
          <Pressable
            style={styles.signUpbutton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  appName: {
    fontFamily: "Goldman_400Regular",
    fontWeight: "bold",
    fontSize: height * 0.07,
    marginBottom: height * 0.43,
    marginTop: height * 0.07,
    textAlign: "center",
    color: "#00539a",
    marginHorizontal: width * 0.01,
  },
  backgroundImage: {
    width: "115%",
    height: "30%",
    flex: 1,
    resizeMode: "stretch",
    position: "absolute",
    marginTop: height * 0.35,
    marginLeft: -width * .04,
  },

  signInbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2596be",
    marginTop: -height * .05,
    marginHorizontal: width * 0.05,
    borderRadius: 500,
    height: height * 0.08,
    width: width * 0.4,
  },
  signUpbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2596be",
    borderRadius: 500,
    height: height * 0.08,
    width: width * 0.4,
    marginTop: -height * .05,
    marginHorizontal: width * 0.05,
  },
  text: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FAF9F6",
  },
  page: {
    backgroundColor: "#FAF9F6",
    width: width,
    height: height,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: height * 0.19,
  },
});

export default Splash;
  
