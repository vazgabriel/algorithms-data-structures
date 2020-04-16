/**
 * Can Construct?
 * @param {string} ransomNote
 * @param {string} magazine
 * If I take some letters in a "randomNote", can I construct
 * what is written in the magazine?
 */
const canConstruct = (ransomNote, magazine) => {
  const hashMap = {}

  for (const m of magazine) {
    if (!hashMap[m]) hashMap[m] = 1
    else hashMap[m]++
  }

  for (const n of ransomNote) {
    if (hashMap[n] === undefined) return false
    else hashMap[n]--
    if (hashMap[n] < 0) return false
  }

  return true
}

/// True
console.log(canConstruct('aaeg', 'ahtyaehdagsdf'))

/// False
console.log(canConstruct('aaeg', 'ahtyahdagsdf'))
