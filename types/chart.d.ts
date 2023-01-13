type EChartsOption = import('echarts').EChartsOption
type SetOptionOpts = import('echarts').SetOptionOpts
type VueChartInstance = InstanceType<typeof import('vue-echarts')['default']>
type ExtractPropTypes<T> = import('vue').ExtractPropTypes<T>

declare type ChartProps = Omit<
  ExtractPropTypes<VueChartInstance>,
  '$el' | 'option'
> & { option?: EChartsOption }

declare type ChartRef = Omit<VueChartInstance, 'setOption'> & {
  setOption: (option: EChartsOption, updateOptions?: SetOptionOpts) => void
}
