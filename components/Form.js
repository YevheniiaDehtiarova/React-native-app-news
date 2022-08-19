import { View, Button, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';


export default function Form({ addArticle }) {
  return (
    <View>
      <Formik initialValues={{ name: '', anons: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          console.log(values);
          addArticle(values);
          action.resetForm();
        }}>
        {(props) => (
          <View>
            <TextInput value={props.values.name}
              style={styles.input}
              placeholder='Enter name'
              onChangeText={props.handleChange('name')} />
            <TextInput value={props.values.anons}
              style={styles.input}
              multiline
              placeholder='Enter anons'
              onChangeText={props.handleChange('anons')} />
            <TextInput value={props.values.full}
              style={styles.input}
              multiline
              placeholder='Enter full information'
              onChangeText={props.handleChange('full')} />
            <TextInput value={props.values.img}
              style={styles.input}
              placeholder='Add photo'
              onChangeText={props.handleChange('img')} />
            <Button title='Add' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 35,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 5,
  }
})



