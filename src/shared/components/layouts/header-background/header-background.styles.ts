import { RFValue } from 'app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';
export const HEADER_HEIGHT = RFValue(60)

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.x12}px;
`;
