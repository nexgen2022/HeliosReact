import React from 'react';
// Import required components
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';


import MapView, {Marker} from 'react-native-maps';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAHBR3ccHUqtuatBgj81u5JQyZZip4gR2Y",
  authDomain: "helios-91ff3.firebaseapp.com",
  databaseURL: "https://helios-91ff3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "helios-91ff3",
  storageBucket: "helios-91ff3.appspot.com",
  messagingSenderId: "1080843681100",
  appId: "1:1080843681100:web:e3b593ee5d9b67f2a2e3e9"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

function getWheelPark(){
  firebase.database().ref('wheelPark/').on('value', function (snapshot) {
    console.log(snapshot.val());
  });
}

function handlePress(){
  console.log('Pressed!');
  alert("ggggg");  
}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

      <View>
        <Text>Get Wheel park list</Text>
        <Button
          style={{fontSize: 10, color: 'red',borderRadius: 5}}
          onClick={handlePress}
          title="Get data">
        </Button>
      </View>

        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 6.913295,
            longitude: 79.920659,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 6.913295,
              longitude: 79.920659,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Helios Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
        
        
      </View>
    </SafeAreaView>
  );
};
export default App;
const mapStyle = [
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  mapStyle: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
  },
  con: {
    backgroundColor: '#fff',
  },
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
    borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
  }  
});