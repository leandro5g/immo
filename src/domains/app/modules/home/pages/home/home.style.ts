import { RFValue } from '@app/shared/libs/fontSize/fontSize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[100]};
`

export const Content = styled.View`
  flex: 1;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.x12}px;
`
