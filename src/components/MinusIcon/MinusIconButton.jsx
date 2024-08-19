import { TouchableOpacity, View } from 'react-native'
import MinusIcon from '../../components/svg/MinusIcon'
import { MinusIconButtonStyles } from './MinusIconButton.styles'

export const MinusIconButton = (props) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={MinusIconButtonStyles.container}>
        <MinusIcon />
      </View>
    </TouchableOpacity>
  )
}
