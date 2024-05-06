import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
  padding: ${({ theme }) => theme.METRICS.PADDING.x8}px;
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
`;

export const Content = styled.View`
`;

export const TitleSection = styled(DefaultText)`
  color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;
