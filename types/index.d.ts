declare type Nullable<T> = T | null

declare type Undefined<T> = T | undefined

declare type ElementRef = Nullable<HTMLElement>

declare type ComponentRef = Nullable<Record<string, any>>

declare type Func = (...args: any[]) => any

declare type PromiseFunc = (...args: any[]) => Promise<any>

declare type OptionItem = {
  label: string
  value: any
}

declare type CSSProperties = import('vue').CSSProperties

declare type StyleValue = import('vue').StyleValue

declare type ExtractPropTypes<T> = import('vue').ExtractPropTypes<T>
