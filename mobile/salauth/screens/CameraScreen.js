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
    const [type, setType] = useState(Camera.Constants.Type.back);
  
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
                        style={{
                        flex: 0.1,
                        alignSelf: 'flex-end'
                        }}
                        onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                        flex: 0.1,
                        alignSelf: 'flex-end'
                        }}
                        onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 18, marginBottom: 5, color: 'white' }}> Back </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: 'center', marginBottom: 20}} onPress={async() => {
                        if(cameraRef){
                        let photo = await cameraRef.takePictureAsync();
                        console.log('photo', photo);
                        }
                    }}>
                        <View style={{ 
                        borderWidth: 2,
                        borderRadius:"50%",
                        borderColor: 'white',
                        height: 50,
                        width:50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'}}
                        >
                        <View style={{
                            borderWidth: 2,
                            borderRadius:"50%",
                            borderColor: 'white',
                            height: 40,
                            width:40,
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
})

export default CameraScreen;
