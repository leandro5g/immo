import { RFValue } from '@app/shared/libs/fontSize/fontSize'

export const METRICS = {
  PADDING: {
    x8: RFValue(8),
    x12: RFValue(12),
  },
  MARGIN: {
    x4: RFValue(4),
    x8: RFValue(8),
    x12: RFValue(12),
    x24: RFValue(24),
  },
  FONT_SIZE: {
    x12: RFValue(12),
    x14: RFValue(14),
    x16: RFValue(16),
    x18: RFValue(18),
    x24: RFValue(24),
  },
  ICONS: {
    x18: RFValue(18),
    x20: RFValue(20),
    x24: RFValue(24),
  },
  RADIUS: {
    x12: RFValue(12)
  }
}

export type TYPE_METRICS = typeof METRICS
