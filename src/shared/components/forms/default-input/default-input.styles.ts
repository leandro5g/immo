import styled from 'styled-components/native';
import { DefaultText } from '../../texts/default-text/default-text.component';
import { RFValue } from '@app/shared/libs/fontSize/fontSize';

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x24}px;
`;

export const LabelInput = styled(DefaultText)`
  margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`;

export const ContainerInput = styled.View`
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
  flex-direction: row;
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;
`;

export const ContentIcon = styled.View`
 justify-content: center;
 align-items: center;
 margin: 0px ${({ theme }) => theme.METRICS.MARGIN.x12}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  color: ${({ theme }) => theme.COLORS.TEXT[100]}
`;
