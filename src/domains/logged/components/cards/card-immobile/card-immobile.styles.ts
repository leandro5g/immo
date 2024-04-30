import { RFValue } from 'app/shared/libs/fontSize/fontSize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(8)}px;
  border-radius: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
  margin-bottom: ${RFValue(8)}px;
`
