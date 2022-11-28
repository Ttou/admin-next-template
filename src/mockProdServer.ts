import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('../mock/*.ts', { eager: true })

const mockList: any[] = []

Object.keys(modules).forEach(key => {
  mockList.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockList)
}
