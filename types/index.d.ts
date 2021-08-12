/// <reference types="vite/client" />

declare type Nullable<T> = T | null

declare type ElementRef = Nullable<HTMLElement>

declare type ComponentRef = Nullable<Record<string, any>>
