export class Quotes {
  static new () {
    return fetch("https://type.fit/api/quotes").then(res => res.json())
      .then(data => data[getRandomInt(data.length)].text)
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}