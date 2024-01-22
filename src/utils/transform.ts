/**
 * 树形转列表
 */
export function treeToList(tree: any, childrenKey = 'children') {
  let queen = [] as any[]
  const out = [] as any[]
  queen = queen.concat(tree)

  while (queen.length) {
    const first = queen.shift()!
    if (first.children) {
      queen = queen.concat(first.children)
      delete first[childrenKey]
    }
    out.push(first)
  }
  return out
}

/**
 * 选项转对象
 */
export function optionsToObj(
  options: any[],
  fieldNames = { labelKey: 'label', valueKey: 'value' }
) {
  return options.reduce((prev, cur) => {
    prev[cur[fieldNames.valueKey]] = cur[fieldNames.labelKey]
    return prev
  }, {})
}
