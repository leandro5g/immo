import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING.x12}px;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;
  margin-top: ${({ theme }) => theme.METRICS.MARGIN.x12}px;
`;

export const Content = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

