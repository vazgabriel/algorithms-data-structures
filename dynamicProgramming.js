const howSimilar = (word1, word2) => {
  const cell = []

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        if (i > 0 && j > 0) {
          if (!cell[i]) cell[i] = []
          cell[i][j] = cell[i - 1][j - 1] + 1
        } else {
          if (!cell[i]) cell[i] = []
          cell[i][j] = 1
        }
      } else {
        if (i > 0 && j > 0) {
          if (!cell[i]) cell[i] = []
          cell[i][j] = Math.max(cell[i - 1][j], cell[i][j - 1])
        } else {
          if (!cell[i]) cell[i] = []
          cell[i][j] = i > 0 ? cell[i - 1][j] : j > 0 ? cell[i][j - 1] : 0
        }
      }
    }
  }

  return cell
}

const words = ['fish', 'fosh', 'diches']
const search = 'hish'

console.log('------')
console.log('Testing similarity of words')

const similarities = words.map((w) => {
  console.log('------')
  console.log(`Testing ${w} to ${search}`)
  console.time()
  const s = howSimilar(w, search)
  console.timeEnd()
  return s
})

const getNumberSimilarity = (s) => Math.max(...s.map((e) => Math.max(...e)))

const list = similarities.map((e, i) => {
  const s = getNumberSimilarity(e)
  return [s, i]
})

const bigger = Math.max(...list.map((e) => e[0]))
const biggerValue = list.find((e) => e[0] === bigger)

console.log('------')
console.log(
  `The most similar to ${search} is ${words[biggerValue[1]]} with ${
    biggerValue[0]
  } of similarity`
)
console.log('------\n\n')
