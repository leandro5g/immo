import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  align-self: center;
  bottom: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`;

export const TextVersion = styled(DefaultText)`
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;
