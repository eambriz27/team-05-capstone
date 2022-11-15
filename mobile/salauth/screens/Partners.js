import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Partners({ navigation }) {
    return (
        <SafeAreaView>
            <Text style={styles.comingSoon}>Partners Coming Soon!</Text>
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
})

export default Partners;
