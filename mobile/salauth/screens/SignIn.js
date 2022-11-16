import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, View, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';


function SignIn({ navigation }) {
    let fontsLoaded = async() => {
        await useFonts({Goldman_400Regular, Goldman_700Bold});
    };
    
    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.appName}>Salauth</Text>
            <View style={styles.parent}>
                
                <Pressable
                style={styles.signInbutton}
                onPress={() => navigation.navigate("Splash")}>
                <Text style={styles.text2}>Back</Text>
                </Pressable>

                <Pressable
                style={styles.signInbutton}
                onPress={() => navigation.navigate("Home")}
                >
                <Text style={styles.text2}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    appName: {
        fontFamily: "Goldman_400Regular",
        fontWeight: "bold",
        fontSize: height * 0.07,
        marginTop: height * 0.07,
        textAlign: "center",
        color: "#00539a",
        marginHorizontal: width * 0.01,
      },
    text1:{
        fontSize: 40,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 5,
        marginBottom: height * 0.4,
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
    text2: {
        fontFamily: "Goldman_400Regular",
        fontSize: 20,
        lineHeight: 27,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#00539a",
    },
    parent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: height * 0.19,
    },
    page: {
        backgroundColor: "#FAF9F6",
        width: width,
        height: height,
      },
})

export default SignIn;
