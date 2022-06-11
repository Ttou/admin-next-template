export const svgIconProps = () => ({
  prefix: { type: String, default: 'icon' },
  name: { type: String, required: true }
})

export type SvgIconProps = ComponentProps<typeof svgIconProps>

export default svgIconProps
