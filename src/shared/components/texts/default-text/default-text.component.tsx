import { TextProps } from 'react-native'
import { Text, TextDefaultStyleProps } from './default-text.styles'

type DefaultTextProps = TextProps & TextDefaultStyleProps

const DefaultText: React.FC<DefaultTextProps> = ({
  variant = '',
  size = 'x12',
  font = 'REGULAR',
  color,
  ...rest
}) => {
  return <Text font={font} color={color} variant={variant} size={size} {...rest} />
}

export { DefaultText }
