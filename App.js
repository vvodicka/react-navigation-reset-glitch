import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {CommonActions, NavigationContainer} from '@react-navigation/native'

const White = ({navigation}) => {
  return (
      <View style={{backgroundColor: 'red'}}>
        <Button
            title="reset to black"
            onPress={() => {
              navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'White'}, {name: 'Blue'}, {name: 'Green'}, {name: 'Yellow'}, {name: 'Black'}],
                  }),
              )
            }}
        />
      </View>
  )
}

const Blue = () => {
  return <View style={{backgroundColor: 'blue', flex: 1}}></View>
}

const Green = () => {
  return <View style={{backgroundColor: 'green', flex: 1}}></View>
}

const Yellow = () => {
  return <View style={{backgroundColor: 'yellow', flex: 1}}></View>
}

const Black = () => {
  return <View style={{backgroundColor: 'black', flex: 1}}></View>
}

const RootStack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <RootStack.Navigator initialRouteName={'White'}>
            <RootStack.Screen name={'White'} component={White} />
            <RootStack.Screen name={'Blue'} component={Blue} />
            <RootStack.Screen name={'Green'} component={Green} />
            <RootStack.Screen name={'Yellow'} component={Yellow} />
            <RootStack.Screen name={'Black'} component={Black} />
          </RootStack.Navigator>
        </NavigationContainer>
    )
  }
}
