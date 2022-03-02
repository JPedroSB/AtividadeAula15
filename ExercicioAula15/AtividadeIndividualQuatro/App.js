import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

const App = () => {
  return (
   <View style = { styles.container }>
    <View style = { styles.containerTop }>
      <Image style = { styles.image }
      source = {require('C:/Users/leona/Documents/ExercicioAula15/AtividadeIndividualQuatro/img/Pokemon.jpg')}/>
    </View>
    <View style = { styles.containerBottom }>
      <View style = {[styles.box, styles.boxRowOne]}>
       <Text style = {[styles.text, {fontSize: 30}]}> Os três Pokemons iniciais </Text>
      </View>
      <View style = {[styles.box, styles.boxRowTwo, { marginRight: 5 }]}>
        <Image style = { styles.imageLittle }
        source = {require('C:/Users/leona/Documents/ExercicioAula15/AtividadeIndividualQuatro/img/charmander.png')}/>
        <Text style = {[styles.text, {fontSize: 24}]}>Charmander</Text>
      </View>
      <View style = {[styles.box, styles.boxRowTwo]}>
        <Image style = { styles.imageLittle }
        source = {require('C:/Users/leona/Documents/ExercicioAula15/AtividadeIndividualQuatro/img/bulba.png')}/>
        <Text style = {[styles.text, {fontSize: 24}]}>Bulbasaur</Text>
      </View>
      <View style = {[styles.box, styles.boxRowTwo, { marginLeft: 5 }]}>
        <Image style = { styles.imageLittle }
        source = {require('C:/Users/leona/Documents/ExercicioAula15/AtividadeIndividualQuatro/img/squirt.png')}/>
        <Text style = {[styles.text, {fontSize: 24}]}>Squirtle</Text>
      </View>
      <View style = {[styles.box, styles.boxRowThree, { marginRight: 5 } ]}>
        <Text style = {[styles.text, {fontSize: 20, marginTop: 5}]}> Esses são os três Pokemons iniciais da primeira geração de Pokemons</Text>
      </View>
      <View style = {[styles.box, styles.boxRowFour, styles.borda, {backgroundColor: '#D3D3D3'}]}>
       <Text style = {[styles.text, {fontSize: 20, marginLeft: 5}]}> Cada um tem habilidades especificas obedecendo. </Text>
      </View>
    </View>
   </View>

  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'lightblue',
 },
 containerTop: {
  flex: 2,
 },
 containerBottom: {
  flex: 3,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
 },
 box: {
  height: '30%',
  marginTop: 0,
  justifyContent: 'center',
  alignItems: 'center',
 },
 boxRowOne: {
  width: '95%',
 },
 boxRowTwo: {
  width: '31%',

 },
 boxRowThree: {
  width: '61%',
 },
 boxRowFour: {
  width: '35%',
 },
 image: {
  height: 220,
  width: 400,
 },
 imageLittle: {
   height: '80%',
   width: '100%',
   borderBottomLeftRadius: 20,
   borderBottomRightRadius: 20,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
 },
 text: {
  fontWeight: 'bold',
  color: '#191970',
 },
 borda: {
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  backgroundColor: 'pink',
 }
});

export default App;