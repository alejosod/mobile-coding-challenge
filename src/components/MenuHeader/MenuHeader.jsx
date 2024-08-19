import CartIcon from '../svg/CartIcon'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export const MenuHeader = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity onPress={onPress} style={{ marginLeft: 'auto', margin: 10 }}>
        <CartIcon />
      </TouchableOpacity>
    </View>
  )
}
