import styled from 'styled-components/native';
import { DefaultText } from '../../texts/default-text/default-text.component';
import { RFValue } from '@app/shared/libs/fontSize/fontSize';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x18}px;
`;

export const LabelInput = styled(DefaultText)`
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`;

export const TextError = styled(DefaultText)`
  margin-top: ${RFValue(4)}px;
  color: ${({ theme }) => theme.COLORS.DANGER[100]};
`;

