import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCannabis, faBars } from '@fortawesome/free-solid-svg-icons'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView from 'react-native-maps'

function App () {
  return (
    <>
    <StatusBar barStyle='dark-content'/>
    
      <MapView style={{ ...StyleSheet.absoluteFillObject }} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}> 
      </MapView>
      <View style={styles.topbar}>
            <FontAwesomeIcon icon={ faBars } color='white' size={30}/>  
        <Text style={styles.logo} >
          <View style={{paddingRight: 8}}>
            <FontAwesomeIcon icon={ faCannabis } color='white' size={30}/>  
          </View>
          SeshSpots
        </Text>
      </View>
  </>
  )
};

const styles = StyleSheet.create({
  topbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#111111',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 6,
  },
  logo: {
    flex: 2,
    color: 'white',
    fontSize: 28,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 1.25
  },
  cannabis: {
    height: 30,
    width: 30,
    color: 'white'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
