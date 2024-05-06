import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled, { css } from 'styled-components/native';

type IsSelectedProps = {
  isSelected: boolean
}

export const Container = styled.View<IsSelectedProps>`
  width: ${RFValue(70)}PX;
  margin-right: ${({ theme }) => theme.METRICS.MARGIN.x4}px;
  align-items: center;
  height: ${RFValue(24)}px;

  ${({ isSelected }) => isSelected && css`
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.BRAND[400]}
  `}
`;

export const TextTabItem = styled(DefaultText)<IsSelectedProps>`
  color: ${({ theme, isSelected }) =>isSelected ?theme.COLORS.BRAND[400]: theme.COLORS.GRAY[100]};
`;
