import * as PhosphorReactNative from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { PhosphorIconElement, PhosphorIconsKey } from 'app/@types/models/libs/phosphor-icon'
import { TYPE_METRICS } from 'app/shared/designs/metrics'

import { Container } from './phosphor.styles'

type IconPhosphorProps = {
  icon: PhosphorIconsKey
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

export { IconPhosphor }
