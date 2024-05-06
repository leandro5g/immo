import { ButtonVoid } from '@app/shared/components/buttons/button-void/button-void.component';
import { DefaultText } from '@app/shared/components/texts/default-text/default-text.component';
import { RFValue } from '@app/shared/libs/fontSize/fontSize';
import styled from 'styled-components/native';

export const Container = styled(ButtonVoid)`
    height: ${RFValue(40)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`;

export const TextButtonSection = styled(DefaultText)`
  color: ${({ theme }) => theme.COLORS.TEXT[100]};
`;
