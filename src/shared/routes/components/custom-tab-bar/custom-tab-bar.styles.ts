import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';

export const TAB_HEIGHT = RFValue(60)

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.NEUTRAL[200]}
`;
