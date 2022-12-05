import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, View, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Goldman_400Regular, Goldman_700Bold } from '@expo-google-fonts/goldman';


function DisplayPicture({ navigation, route }) {
    let fontsLoaded = async() => {
        await useFonts({Goldman_400Regular, Goldman_700Bold});
    };

    photo = route.params;
    console.log("PASSED PARAM", photo);
    
    return (
        <SafeAreaView style={styles.page}>
            <KeyboardAwareScrollView>
                <Text style={styles.appName}>la tuya</Text>
                <Text style={styles.subheaderText}>Fuck ya motha</Text>


                <View style={styles.parent}>    
                    <Pressable
                    style={styles.signInbutton}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                    </Pressable>
                    <Image style={styles.backgroundImage} source={photo}/>
                    <Pressable
                    style={styles.signInbutton}
                    onPress={() => navigation.navigate("CameraScreen")}
                    >
                    <Text style={styles.buttonText}>Next Step</Text>
                    </Pressable>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

photo = null;
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
    subheaderText:{
        fontSize: 40,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 5,
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
    buttonText: {
        fontFamily: "Goldman_400Regular",
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
        borderWidth: 3,
        padding: 10,
    },
    backgroundImage: {
        width: "110%",
        height: "1000%",
        flex: 1,
        resizeMode: "stretch",
        position: "absolute",
        marginTop: height * 0.15,
        marginLeft: -width * .04,
    },
})

export default DisplayPicture;