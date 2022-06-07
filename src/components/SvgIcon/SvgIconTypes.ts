import type { ExtractPropTypes } from 'vue'

export const svgIconProps = () => ({
  prefix: { type: String, default: 'icon' },
  name: { type: String, required: true }
})

export type SvgIconProps = Partial<
  ExtractPropTypes<ReturnType<typeof svgIconProps>>
>

export default svgIconProps
