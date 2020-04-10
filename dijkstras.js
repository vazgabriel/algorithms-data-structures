const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {},
}

const costs = { a: 6, b: 2, fin: Infinity }

const parents = {
  a: 'start',
  b: 'start',
  fin: null,
}

const processed = []

const findLowestCostNode = (c) => {
  let lowest = Infinity
  let key = null

  Object.keys(c).forEach((k) => {
    if (!processed.includes(k) && c[k] < lowest) {
      lowest = c[k]
      key = k
    }
  })

  return key
}

console.log('Using Dijkstras algorithm')
console.log('------')

console.time()
let node = findLowestCostNode(costs)

while (!!node) {
  const cost = costs[node]
  const neighbors = graph[node]

  Object.keys(neighbors).forEach((k) => {
    const newCost = cost + neighbors[k]
    if (costs[k] > newCost) {
      costs[k] = newCost
      parents[k] = node
    }
  })

  processed.push(node)
  node = findLowestCostNode(costs)
}
console.timeEnd()

console.log('------')
console.log('Final Parents', parents)
console.log('------\n\n')
