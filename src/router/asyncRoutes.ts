const files = import.meta.glob('./routes/*', { eager: true })

const routes = Object.values(files).reduce((total, current) => {
  total.push(current.default)
  return total
}, [])

export default routes
