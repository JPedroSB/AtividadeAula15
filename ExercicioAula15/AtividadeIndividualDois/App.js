import React, { Component } from 'react'
import { View,  Text, Image, StatusBar } from 'react-native'

const App = () => {
   return (
      <View>
         <View>
         <StatusBar hidden />
            <Image source = {{uri: 'https://images.hdqwalls.com/download/riding-pokemon-8k-op-1080x2280.jpg'}}
            style = {{width: 393, height: 790}}
             />
         </View>
      </View>
   )
}
export default App