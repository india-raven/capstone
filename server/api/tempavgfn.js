const data = require('./statetemps1990/ma.json')

console.log(data)

const avg = thing => {
  let sum = 0
  for (let i = 0; i < thing.length; i++) {
    sum += thing[i].TAVG
  }
  let average = sum / thing.length
  return average.toFixed(2)
}

console.log('TEMP:', avg(data))
