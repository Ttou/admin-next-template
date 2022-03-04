declare type Rule = {
  message?: string | JSX.Element
  trigger?: 'blur' | 'change' | ['change', 'blur']
  type?:
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'array'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email'
    | 'any'
  required?: boolean
  /** treat required fields that only contain whitespace as errors */
  whitespace?: boolean
  /** validate the exact length of a field */
  len?: number
  /** validate the min length of a field */
  min?: number
  /** validate the max length of a field */
  max?: number
  /** validate the value from a list of possible values */
  enum?: string | string[]
  /** validate from a regular expression */
  pattern?: RegExp
  /** transform a value before validation */
  transform?: (value: any) => any
  /** custom validate function (Note: callback must be called) */
  validator?: (
    rule: any,
    value: any,
    callback: any,
    source?: any,
    options?: any
  ) => any
}

declare type FormRules = Record<string, Rule | Rule[]>
