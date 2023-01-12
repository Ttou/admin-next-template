declare type ChartProps = import('vue').ExtractPropTypes<
  typeof import('vue-echarts')['default']['props']
> & { option: import('echarts').EChartsOption }
