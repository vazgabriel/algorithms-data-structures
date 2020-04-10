/**
 * Recursion Activities:
 * 1) fact / factTailRecursive
 * 2) searchSquare
 */

/// Normal factorial function
const fact = (n) => {
  if (n <= 1) return 1
  return n * fact(n - 1) /// Depends on N value to complete
}

/// Tail Recursive using accumulated value to save memory space
const factTailRecursive = (n, a = 1) => {
  if (n <= 1) return a
  return factTailRecursive(n - 1, n * a) /// Don't depends on N value to complete
}

/// Try some numbers
const testNumbers = [1, 10, 30, 50, 100, 1000]

console.log(`------`)
console.log('Testing normal recursion example')
const times = []
testNumbers.forEach((rand) => {
  const start = process.hrtime.bigint()
  fact(rand)
  const end = process.hrtime.bigint()
  times.push(parseInt(end - start))
})
const averageLinear = times.reduce((p, c) => p + c, 0) / times.length
console.log(`Average: ${averageLinear} nanoseconds`)
times.splice(0, times.length)

console.log(`------`)
console.log('Testing tail recursion example')
testNumbers.forEach((rand) => {
  const start = process.hrtime.bigint()
  factTailRecursive(rand)
  const end = process.hrtime.bigint()
  times.push(parseInt(end - start))
})
const averageBinary = times.reduce((p, c) => p + c, 0) / times.length
console.log(`Average: ${averageBinary} nanoseconds`)

const velocity = (averageLinear / averageBinary) * 100
console.log(
  `Tail recursion was ${parseInt(
    velocity > 100 ? velocity : 100 - velocity
  )}% ${velocity > 100 ? 'faster' : 'slower'} than normal recursion`
)
console.log(`------\n\n`)

const returnSmaller = (x, y) => (x > y ? y : x)
const returnBigger = (x, y) => (x > y ? x : y)

/// Search bigger square that can be used as same size in a rectangle
const searchSquare = (x, y) => {
  if (x === y) return x

  const smaller = returnSmaller(x, y)
  const rest = returnBigger(x, y) % smaller
  if (rest === 0) {
    return smaller
  }

  return searchSquare(rest, smaller)
}

;[
  [1000, 300],
  [2000, 800],
  [5000, 2450],
].forEach((rect) => {
  console.log(`------`)
  console.log(`Searching greater square for ${rect[0]}x${rect[1]}`)
  console.log(`Greater square is: ${searchSquare(rect[0], rect[1])}`)
})
console.log(`------\n\n`)
