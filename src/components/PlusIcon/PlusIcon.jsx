import { TouchableOpacity, View } from 'react-native'
import PlusIcon from '../svg/PlusIcon'
import { PlusIconStyles } from './PlusIcon.styles'

export const PlusIconButton = (props) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={PlusIconStyles.container}>
        <PlusIcon />
      </View>
    </TouchableOpacity>
  )
}
