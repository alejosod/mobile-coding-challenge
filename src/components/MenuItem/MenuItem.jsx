import { View } from 'react-native'
import { Item } from '../Item/Item'
import { PlusIconButton } from '../PlusIcon/PlusIcon'
import { useCartItem } from '../../hooks/useCartItem'
import { useAlert } from '../../hooks/useAlert'

export const MenuItem = (props) => {
  const { id, name, price } = props

  const { addItemToCart } = useCartItem(id)
  const { alert } = useAlert(`${name} added`)

  const onPress = () => {
    const item = {
      id,
      name,
      price,
    }

    addItemToCart(id, item)
    alert()
  }

  return (
    <View
      style={{
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Item name={name} price={price} />
      <PlusIconButton onPress={onPress} />
    </View>
  )
}
