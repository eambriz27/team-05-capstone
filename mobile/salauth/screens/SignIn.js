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
        <SafeAreaView>
            <View style={styles.parent}>
                <Pressable
                style={styles.signInbutton}
                onPress={() => navigation.navigate("Home")}
                >
                <Text style={styles.text}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 50
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
    text: {
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
})

export default SignIn;
