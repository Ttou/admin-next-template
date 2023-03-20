declare type Nullable<T> = T | null

declare type Undefined<T> = T | undefined

declare type ElementRef = Nullable<HTMLElement>

declare type ComponentRef = Nullable<Record<string, any>>

declare type ComponentProps<T> = Partial<
  import('vue').ExtractPropTypes<ReturnType<T>>
>

declare type Func = (...args: any[]) => any

declare type PromiseFunc = (...args: any[]) => Promise<any>

declare type OptionItem = {
  label: string
  value: any
}
