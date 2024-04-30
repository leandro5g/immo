import { RFValue } from 'app/shared/libs/fontSize/fontSize'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  margin: ${RFValue(6)}px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.View``

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const ContentLocation = styled.View`
  flex-direction: row;
  align-items: center;
  left: -${RFValue(3)}px;
  margin-top: ${RFValue(4)}px;
`

export const ContentValue = styled.View`
  align-items: flex-end;
`

export const IconLocation = styled(MaterialIcons).attrs(({ theme }) => ({
  size: RFValue(20),
  color: theme.COLORS.BRAND[100],
}))``
