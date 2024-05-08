import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: ${RFValue(48/2)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
`;
