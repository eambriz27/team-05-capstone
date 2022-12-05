import {React} from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Authenticate({ navigation }) {
    navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text style={styles.title}>Mobile Authentication</Text>
            <Text style ={styles.text}>Open the Camera to Authenticate Yourself on Web</Text>
            <Pressable
                style={styles.signInbutton}
                onPress={() => navigation.navigate("CameraScreen")}>
                <Text style={styles.buttonText}>Open Camera</Text>
            </Pressable>
        </SafeAreaView>
    );
}


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        fontWeight: '400',
        color: "#00539a",
        textAlign:'center',
        paddingBottom: 30,
        paddingTop: 30,
    },
    title:{
        fontSize: 35,
        fontWeight: '400',
        color: "#00539a",
        textAlign:'center',
        paddingBottom: 30,
        paddingTop: 30,
    },
    signInbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: height * .45,
        marginHorizontal: width * 0.3,
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
})

export default Authenticate;
