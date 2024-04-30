import styled from 'styled-components/native'
import { DefaultText } from '../../texts/default-text/default-text.component'

export const Container = styled.View`
  align-items: flex-end;
`

export const TextValue = styled(DefaultText)`
  color: ${({ theme }) => theme.COLORS.BRAND[400]};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.MEDIUM};
`
