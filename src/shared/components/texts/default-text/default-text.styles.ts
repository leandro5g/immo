import { TYPE_METRICS } from 'app/shared/designs/metrics'
import styled, { css } from 'styled-components/native'

export type VARIANT_TEXT = 'P1' | ''

export type TextDefaultStyleProps = {
  variant?: VARIANT_TEXT
  size?: keyof TYPE_METRICS['FONT_SIZE']
}

export const Text = styled.Text<TextDefaultStyleProps>`
  ${({ variant }) =>
    variant === 'P1' &&
    css`
      font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x24}px;
      color: ${({ theme }) => theme.COLORS.GRAY[100]};
    `}

  ${({ size, theme }) =>
    size &&
    css`
      font-size: ${theme.METRICS.FONT_SIZE[size]}px;
    `}
`
