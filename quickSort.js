const quickSort = (array) => {
  if (array.length < 2) return array

  const pivot = array.shift()
  const less = array.filter((e) => e <= pivot)
  const greater = array.filter((e) => e > pivot)

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

const arrays = [10, 30, 50, 100, 1000].map((n) => [
  ...new Set(
    [...Array(n).keys()].map((_) => Math.round(Math.random() * n * 10 + 1))
  ),
])

console.log('Sorting arrays:\n------\n')
arrays.forEach((array) => {
  console.log('------')
  console.log(`Sorting array with: ${array.length} elements`)
  console.time()
  quickSort(array)
  console.timeEnd()
  console.log(`------\n\n`)
})
