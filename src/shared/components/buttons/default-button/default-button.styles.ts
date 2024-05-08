import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';
import { DefaultText } from '../../texts/default-text/default-text.component';

export const Container = styled.TouchableOpacity`
  height: ${RFValue(46)}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BRAND[400]};
`;

export const TextButton = styled(DefaultText)`
  color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
`;
