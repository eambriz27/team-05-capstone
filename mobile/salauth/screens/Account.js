import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';

function Account({ navigation }) {
    navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text style={styles.comingSoon}>Your Services Coming Soon!</Text>
            <View style={styles.parent}>    
                <Pressable
                style={styles.signInbutton}
                onPress={() => navigation.navigate("CameraScreen")}>
                <Text style={styles.buttonText}>Open Camera</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    comingSoon:{
        fontSize: 40,
        fontWeight: "400",
        textAlign: "center",
        paddingTop: 50
    },
    backImage: {
        width: '60%', 
        height: '50%',
        marginVertical: height*0.09,
        marginHorizontal: width*0.2,
        opacity:0.5,
    },
    signInbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: height * .05,
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
})

export default Account;
