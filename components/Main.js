import { View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import {React, useState } from 'react';
import { gStyle } from '../styles/style';
import { StyleSheet } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form'

export default function Main({ navigation }) {

  const [news, setNews] = useState([
    {
      name: 'Bread with butter', anons: 'Bread with butter is tasty', full: 'Bread with butter is in the morning', key: '1',
      img: 'https://static.1000.menu/res/640/img/content-v2/01/1d/5045/bjstrji-hleb_1589872123_6_max.jpg'
    },
    {
      name: 'Baget', anons: 'Aroma baget', full: 'Aroma baget is in the kitchen', key: '2',
      img: 'https://img.povar.ru/main/b9/f2/19/bd/artizanskii_hleb-686984.JPG'
    },
    {
      name: 'Bread with whole grain', anons: 'Bread with whole grain is useful', full: 'Bread with whole grain contains healthe vitamins', key: '3',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Assorted_bread.jpg/274px-Assorted_bread.jpg'
    },
  ])

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article,
        ...list
      ]
    })
    setModalWindow(false);
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons name='close-circle' size={34} color="red"  onPress={() => setModalWindow(false)} style={{flex:1}}/>
          <Text style={styles.title}>Add style to article</Text>
        <Form addArticle ={addArticle}/>
        </View>
      </Modal>
      <Ionicons name='add-circle' size={34} color='black' onPress={() => setModalWindow(true)} style={{flex:1}}/>
      <Text Hello style={gStyle.title}>Main Page</Text>
      <FlatList data={news} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
          <Image style={styles.img} source={{
            uri: item.img
          }}>
          </Image>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.anons}>{item.anonce}</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30
  },
  header: {
    marginBottom: 30
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    marginTop: 20
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    marginTop: 5
  },
  img: {
    width: '100%',
    height: 200,
  },
})

