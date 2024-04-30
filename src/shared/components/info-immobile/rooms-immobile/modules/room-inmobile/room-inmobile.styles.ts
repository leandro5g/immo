import { DefaultText } from 'app/shared/components/texts/default-text/default-text.component'
import { RFValue } from 'app/shared/libs/fontSize/fontSize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-right: ${RFValue(12)}px;
  flex-direction: row;
  align-items: center;
`

export const TextRoom = styled(DefaultText)`
  margin-left: ${RFValue(4)}px;
`
