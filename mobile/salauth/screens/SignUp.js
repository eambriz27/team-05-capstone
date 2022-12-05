import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, View, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';


function SignUp({ navigation }) {
    let fontsLoaded = async() => {
        await useFonts({Goldman_400Regular, Goldman_700Bold});
    };
    
    return (
        <SafeAreaView style={styles.page}>
            <KeyboardAwareScrollView>
                <Text style={styles.appName}>Salauth</Text>
                <Text style={styles.subheaderText}>Create an account</Text>

                <TextInput
                style={styles.input}
                placeholder="First Name"
                keyboardType="default"
                />

                <TextInput
                style={styles.input}
                placeholder="Last Name"
                keyboardType="default"
                />

                <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                />

                <TextInput
                style={styles.input}
                placeholder="Username"
                keyboardType="default"
                />

                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                keyboardType="visible-password"
                />

                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Confirm Password"
                keyboardType="visible-password"
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
                        <Text style={styles.buttonText}>Sign Up</Text>
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
        textAlign: "center",
        color: "#00539a",
        marginHorizontal: width * 0.01,
      },
    subheaderText:{
        fontSize: 35,
        fontWeight: "400",
        textAlign: "center",
        color: "#00539a",
        paddingTop: 5,
    },
    scanButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: -height * .16,
        marginHorizontal: width * 0.3,
        borderRadius: 500,
        height: height * 0.08,
        width: width * 0.4,
    },
    signInbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: -height * .2,
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
        marginTop: height * 0.19,
    },
    page: {
        backgroundColor: "#FAF9F6",
        width: width,
        height: height,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        width: width * .75,
        borderTopColor:"#FAF9F6",
        borderRightColor:"#FAF9F6",
        borderLeftColor:"#FAF9F6",
        borderBottomColor:"#00539a",
        backgroundColor: '#F1F1F1'
    },
})

export default SignUp;
