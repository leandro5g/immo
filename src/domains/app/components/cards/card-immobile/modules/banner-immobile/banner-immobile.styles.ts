import { RFValue } from '@app/shared/libs/fontSize/fontSize'
import styled from 'styled-components/native'

export const ContainerBanner = styled.View`
  height: ${RFValue(200)}px;
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;
`

export const Banner = styled.Image`
  flex: 1;
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;
`
