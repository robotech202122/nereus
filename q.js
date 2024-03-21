const fs = require('fs');
const prompt = require('prompt-sync')();

let contents = fs.readFileSync('rarity.json').toString()
let rarities = JSON.parse(contents)

function main() {

  while (true) {
    const id = parseInt(prompt('What is your NFT id: '))
    if (isNaN(id)) break
    
    for (let rarity of rarities) {
      if (rarity[0] == id) {
        console.log(rarity)
      }
    }
  }
}

main()