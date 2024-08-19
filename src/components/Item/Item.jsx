import { Text, View } from 'react-native'
import { ItemStyles } from './Item.styles'

export const Item = (props) => {
  const { name, price } = props

  return (
    <View style={ItemStyles.container}>
      <Text style={ItemStyles.itemName}>{name}</Text>
      <Text style={ItemStyles.itemPrice}>{`$${price.toFixed(2)}`}</Text>
    </View>
  )
}
