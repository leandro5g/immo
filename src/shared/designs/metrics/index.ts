import { RFValue } from 'app/shared/libs/fontSize/fontSize'

export const METRICS = {
  PADDING: {
    x8: RFValue(8),
    x12: RFValue(12),
  },
  MARGIN: {
    x8: RFValue(8),
    x12: RFValue(12),
  },
  FONT_SIZE: {
    x12: RFValue(12),
    x16: RFValue(16),
    x18: RFValue(18),
    x24: RFValue(24),
  },
  ICONS: {
    x24: RFValue(24),
    x18: RFValue(18),
  },
}

export type TYPE_METRICS = typeof METRICS
