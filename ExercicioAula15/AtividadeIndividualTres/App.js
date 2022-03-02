import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
 return(
   <View>
     <ImageBackground
      style={[styles.fixed, styles.container]}
      source={{uri: 'https://images.wallpapersden.com/image/download/just-a-tree_a2hqaG6UmZqaraWkpJRmZW1lrWdnbWU.jpg'}}
             />
     <ScrollView style={[styles.scrollview]}>
        <View style={styles.container}>
        <Text style={styles.text}>Preencha Abaixo os dados
        </Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Nome Completo'
                clearButtonMode='always'/>
            <TextInput
                style={styles.input}
                placeholder="Digite sua Idade "
                keyboardType={'numeric'}
                clearButtonMode="always"/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent',
 },
 text: {
   fontWeight: 'bold',
   color: '#2c3e50',
   fontSize: 20,
   textAlign: 'center',
   marginTop: 430,
   backgroundColor: 'lightgrey',
   marginLeft: 20,
   marginRight: 20,
   marginBottom: 20,
   borderRadius: 10,
   padding: 10,
   opacity: 0.7
  },

inputContainer: {
    backgroundColor: 'lightgrey',
    opacity: 0.7,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    padding: 10
},

 input: {
   fontSize: 20,
   textAlign: 'center',
   backgroundColor: 'white',
   marginRight: 40,
   marginLeft: 40,
   margin: 13,
   borderRadius: 20,
   borderColor: 'black',
 },

 button: {
   marginTop: 3,
   height: 30,
   backgroundColor: 'grey',
   borderRadius: 10,
   marginRight: 90,
   marginLeft: 90,
   padding: 1,
   marginBottom: 5,
   height: 25,
   alignItems: 'center',
   borderColor: 'black',
   borderWidth: 0.6,
 }

});

export default App;

