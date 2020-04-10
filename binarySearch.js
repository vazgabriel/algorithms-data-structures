const sizes = [100, 10000, 100000, 1000000]

sizes.forEach((size) => {
  console.log(`------`)
  console.log(`Testing Array of size ${size}`)

  /// Binary searches require to have ordered lists
  const orderedArray = [...Array(size).keys()].map((_, i) => i + 1)

  const linearSearch = (value) => {
    for (let i = 0; i < orderedArray.length; i++) {
      if (orderedArray[i] === value) {
        return i
      }
    }

    return -1 /// Not found
  }

  const binarySearch = (value) => {
    let low = 0
    let high = orderedArray.length - 1

    while (low <= high) {
      const guess = Math.floor((high + low) / 2)
      if (orderedArray[guess] === value) {
        return guess
      } else if (orderedArray[guess] > value) {
        high = guess - 1
      } else {
        low = guess + 1
      }
    }

    return -1 /// Not found
  }

  /// Get average of 100 tests
  const randoms = [...Array(100).keys()].map((_) =>
    Math.round(Math.random() * size + 1)
  )

  console.log('Testing Linear search example')
  const times = []
  randoms.forEach((rand) => {
    const start = process.hrtime.bigint()
    linearSearch(rand)
    const end = process.hrtime.bigint()
    times.push(parseInt(end - start))
  })
  const averageLinear = times.reduce((p, c) => p + c, 0) / times.length
  console.log(`Average: ${averageLinear} nanoseconds`)
  times.splice(0, times.length)

  console.log('Testing Binary search example')
  randoms.forEach((rand) => {
    const start = process.hrtime.bigint()
    binarySearch(rand)
    const end = process.hrtime.bigint()
    times.push(parseInt(end - start))
  })
  const averageBinary = times.reduce((p, c) => p + c, 0) / times.length
  console.log(`Average: ${averageBinary} nanoseconds`)

  const velocity = (averageLinear / averageBinary) * 100
  console.log(
    `Binary was ${parseInt(velocity > 100 ? velocity : 100 - velocity)}% ${
      velocity > 100 ? 'faster' : 'slower'
    } than linear`
  )
  console.log(`------\n\n`)
})
