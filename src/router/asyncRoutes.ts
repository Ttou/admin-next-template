const files = import.meta.globEager('./routes/*')

const routes = Object.values(files).reduce((total, current) => {
  total.push(current.default)
  return total
}, [])

export default routes
