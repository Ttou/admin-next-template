/**
 * 绑定回车键
 */
export const withEnterKey =
  (fn: (...args: any[]) => any) => (e: Event | KeyboardEvent) => {
    if ('key' in e) {
      if (e.key === 'Enter') {
        fn()
      }
    }
  }
