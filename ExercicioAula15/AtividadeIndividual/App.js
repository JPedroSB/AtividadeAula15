import React, { Component } from 'react'
import { View, Text, StatusBar,  Image } from 'react-native'



const App = () => {
  return (
    <View
         style ={{
            backgroundColor: 'lightgrey',
            padding: 10,
         }}>
         <View>
            <StatusBar barStyle = 'dark-content' hidden = {false} backgroundColor = 'lightblue' translucent = {true}/>
            <Text
                style = {{
                    fontSize: 25,
                    color: 'white',
                    fontWeight: 'bold',
                    marginTop: 20,
                }}
            > Câmera </Text>
            <Text style = {{
                marginBottom: -17,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'right',
                marginTop: -40,
            }}> . </Text>
            <Text style = {{
                marginBottom: -17,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'right',
            }}> . </Text>
            <Text style = {{
                marginBottom: 5,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'right',
            }}> . </Text>
         </View>
         <View style = {{flex: 1 }}>
            <Image
                source = {require('C:/Users/leona/Documents/ExercicioAula15/AtividadeIndividual/img/camera_64.png')}
                style = {{
                    margin: 300,
                    marginTop: 600
                }}
            />
         </View>
    </View>
    )
}
export default App
