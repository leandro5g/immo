import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled, { css } from 'styled-components/native';

export type InputStateProps = {
  hasError?: boolean
}

export const Container = styled.View<InputStateProps>`
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.DEFAULT.WHITE};
  flex-direction: row;
  border-radius: ${({ theme }) => theme.METRICS.RADIUS.x12}px;

  ${({ hasError }) => hasError && css`
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.DANGER[100]};
  ` }
`;

export const ContentIcon = styled.View`
 justify-content: center;
 align-items: center;
 margin: 0px ${({ theme }) => theme.METRICS.MARGIN.x12}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
  color: ${({ theme }) => theme.COLORS.TEXT[100]}
`;
