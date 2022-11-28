import React from 'react';
import { Image, Dimensions, Button, SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';

function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

function CameraScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.front);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => {
                setCameraRef(ref) ;
            }}>
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, marginBottom: 0, color: 'white' }}> Back </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center', marginBottom: 60}} onPress={async() => {
                        if(cameraRef){
                        let photo = await cameraRef.takePictureAsync();
                        console.log('photo', photo);
                        }
                        navigation.goBack();
                    }}>
                        <View style={{ 
                        borderWidth: 2,
                        borderRadius:"50%",
                        borderColor: 'white',
                        height: 80,
                        width:80,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'}}
                        >
                        <View style={{
                            borderWidth: 2,
                            borderRadius:"50%",
                            borderColor: 'white',
                            height: 70,
                            width:70,
                            backgroundColor: 'white'}} >
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
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
    backButton: {
        flex: 0.1,
        alignItems: "center",
        alignSelf: 'flex-start',
        justifyContent: "center",
        backgroundColor: "#2596be",
        marginTop: -height * .05,
        marginHorizontal: width * 0.05,
        borderRadius: 500,
        height: height * 0.08,
        width: width * 0.3, 
    }
})

export default CameraScreen;
