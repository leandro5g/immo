import {
  ICON_MAP_ROOMS,
  ICON_PREFIX_ROOMS,
} from 'app/shared/config/constants/map-rooms'

import {
  IconPhosphor,
  IconKeyType,
} from 'app/shared/components/libs/phosphor-icons/phosphor-icons.component'

import { Container, TextRoom } from './room-inmobile.styles'
import { useTheme } from 'styled-components/native'

type RoomInmobileProps = {
  keyRoom: keyof typeof ICON_MAP_ROOMS
  count: number
  icon: IconKeyType
}

const RoomInmobile: React.FC<RoomInmobileProps> = ({ count, keyRoom, icon }) => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <IconPhosphor sizeIcon="x18" color={COLORS.GRAY[100]} icon={icon} />
      <TextRoom variant="P1">
        {count} {ICON_PREFIX_ROOMS[keyRoom]}
      </TextRoom>
    </Container>
  )
}

export { RoomInmobile }
