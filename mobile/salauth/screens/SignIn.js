import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';


function SignIn({ navigation }) {
    let fontsLoaded = async() => {
        await useFonts({Goldman_400Regular, Goldman_700Bold});
    };
    
    return (
        <SafeAreaView style={styles.page}>
            <KeyboardAwareScrollView>
                <Text style={styles.appName}>Salauth</Text>
                <Text style={styles.subheaderText}>Sign in to your account</Text>

                <TextInput
                style={styles.input}
                placeholder="Username"
                keyboardType="email-address"
                />

                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                keyboardType="visible-password"
                />

                <Image 
                source = {require("../assets/salauth.png")}
                style = {styles.backgroundImage}
                />

                <View style={styles.parent}>   

                    <Pressable
                        style={styles.scanButton}
                        onPress={() => navigation.navigate("CameraScreen")}>
                        <Text style={styles.buttonText}>Face Scan</Text>
                    </Pressable>
                </View>

                <View style={styles.parent}>
                    <Pressable
                    style={styles.signInbutton}
                    onPress={() => navigation.navigate("Splash")}>
                    <Text style={styles.buttonText}>Back</Text>
                    </Pressable>

                    <Pressable
                    style={styles.signInbutton}
                    onPress={() => navigation.navigate("Home")}
                    >
                    <Text style={styles.buttonText}>Sign In</Text>
                    </Pressable>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    appName: {
        
        fontWeight: "bold",
        fontSize: height * 0.07,
        marginTop: height * 0.07,
        textAlign: "center",
        color: "#00539a",
        marginHorizontal: width * 0.01,
      },
    subheaderText: {
        fontSize: 30,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 5,
        marginBottom: height * 0.05,
    },
    backgroundImage: {
        width: "115%",
        height: "33%",
        flex: 1,
        resizeMode: "cover",
        position: "absolute",
        marginTop: height * 0.45,
        marginLeft: -width * .04,
    },
    scanButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: height * .21,
        marginHorizontal: width * 0.3,
        borderRadius: 500,
        height: height * 0.08,
        width: width * 0.4,
    },
    signInbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: -height * .13,
        marginHorizontal: width * 0.05,
        borderRadius: 500,
        height: height * 0.08,
        width: width * 0.4,
    },
    buttonText: {
        
        fontSize: 20,
        lineHeight: 27,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#FAF9F6",
    },
    parent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: height * 0.15
    },
    page: {
        backgroundColor: "#FAF9F6",
        width: width,
        height: height,
      },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10,
    },
})

export default SignIn;
