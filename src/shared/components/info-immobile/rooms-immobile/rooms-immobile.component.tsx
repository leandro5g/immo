import { RoomInmobile } from './modules/room-inmobile/room-inmobile.module'
import { Container } from './rooms-immobile.styles'

const RoomsImmobile: React.FC = () => {
  return (
    <Container>
      <RoomInmobile count={20} keyRoom="SQUARE" icon="ArrowsOut" />
      <RoomInmobile count={3} keyRoom="ROOM" icon="Bed" />
      <RoomInmobile count={2} keyRoom="BATH" icon="Toilet" />
    </Container>
  )
}

export { RoomsImmobile }
