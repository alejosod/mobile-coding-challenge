import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Menu from './src/screens/Menu'
import Cart from './src/screens/Cart'
import { AlertContextProvider } from './src/contexts/AlertContext'
import { CartContextProvider } from './src/contexts/CartContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <AlertContextProvider>
      <CartContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Menu'>
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContextProvider>
    </AlertContextProvider>

  )
}
