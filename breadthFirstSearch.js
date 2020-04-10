const graph = {}
graph['me'] = ['john', 'mike', 'lucas']
graph['john'] = ['you', 'mike', 'lucas']
graph['mike'] = ['john', 'you']
graph['lucas'] = ['you', 'mike', 'john', 'dan']
graph['dan'] = ['lucas', 'abner']
graph['abner'] = ['dan']

/// From "me", how can I know who knows abner?
const search = (name, who) => {
  let queue = [...graph[name]]
  const searched = []

  while (!!queue.length) {
    const person = queue.shift()
    if (!searched.includes(person)) {
      const personKnow = graph[person] || []

      if (personKnow.includes(who)) {
        console.log(`Person ${person} know ${who}`)
        return true
      }

      queue = [...queue, ...personKnow]
      searched.push(person)
    }
  }

  console.log(`No one knows ${who}`)
  return false
}

search('me', 'abner')
