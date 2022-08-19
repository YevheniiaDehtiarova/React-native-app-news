import { View, Text,Image } from 'react-native';
import React from 'react';
import { gStyle } from '../styles/style';
import { StyleSheet } from 'react-native-web';


export default function FullInfo({route}) {
    return (
      <View style= {gStyle.main}>
         <Image style={styles.img} source={{
             uri: route.params.img
          }}></Image>
        <Text style={[gStyle.title,styles.header]}>{route.params.name}</Text>
        <Text  style ={styles.full}>{route.params.full}</Text>
      </View>
    ); 
}


const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    marginTop: 20
  },
  header: {
    fontSize: 25,
    marginTop: 25
  },
  img: {
    width: '100%',
    height: 200,
  }
})


