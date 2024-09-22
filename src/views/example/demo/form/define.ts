export const formData = () => ({
  name: '',
  zone: '',
  date: '',
  delivery: '',
  type: [],
  resource: '',
  desc: ''
})

export type IFromData = ReturnType<typeof formData>
