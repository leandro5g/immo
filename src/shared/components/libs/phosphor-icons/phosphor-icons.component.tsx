import * as PhosphorReactNative from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './phosphor.styles'
import { TYPE_METRICS } from 'app/shared/designs/metrics'

type IconKeyType = keyof typeof PhosphorReactNative

export type PhosphorIconElement = PhosphorReactNative.Icon

type IconPhosphorProps = {
  icon: IconKeyType
  color?: string
  propsIcon?: PhosphorReactNative.IconProps
  sizeIcon?: keyof TYPE_METRICS['ICONS']
}

const IconPhosphor: React.FC<IconPhosphorProps> = ({
  icon,
  color,
  sizeIcon = 'x24',
  propsIcon,
  ...rest
}) => {
  const { METRICS, COLORS } = useTheme()

  const iconSize = METRICS.ICONS[sizeIcon]
  const iconColor = color ?? COLORS.BRAND[100]
  const PhosphorIcon = PhosphorReactNative[icon] as PhosphorIconElement

  return (
    <Container style={{ width: iconSize }}>
      <PhosphorIcon
        size={iconSize}
        color={iconColor}
        weight="regular"
        mirrored={false}
        {...rest}
        {...propsIcon}
      />
    </Container>
  )
}

export { IconPhosphor, IconKeyType }
