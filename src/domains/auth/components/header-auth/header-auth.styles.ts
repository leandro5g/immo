import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.x12}px;
`;

export const Content = styled.View`
  margin: ${({ theme }) => theme.METRICS.MARGIN.x12 * 2}px 0px;
`;

export const Subtitle = styled(DefaultText)`
  margin-top: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
  width: 90%;
`;
