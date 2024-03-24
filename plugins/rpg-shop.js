/*const items = {
    buy: {
        limit: {
            exp: 999
        },
        potion: {
            money: 1250,
        },
        trash: {
            money: 4,
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
          money: 3000
        }
    },
    sell: {
        potion: {
            money: 125,
        },
        trash: {
            money: 2
        },
        wood: {
            money: 600
        },
        rock: {
            money: 750
        },
        string: {
            money: 300
        },
        iron: {
            money: 2500
        },
        gold: {
            money: 4700
        },
        diamond: {
            money: 9000
        },
        emerald: {
            money: 15000
        }
    }
}*/

const items = {
  buy: {
    limit: {
      exp: 999
    },
    potion: {
      money: 1250
    },
    aqua: {
      money: 500
    },
    trash: {
      money: 40
    },
    wood: {
      money: 700
    },
    rock: {
      money: 850
    },
    string: {
      money: 400
    },
    iron: {
      money: 3000
    },
    diamond: {
      money: 7500
    },
    emerald: {
      money: 8500
    },
    gold: {
      money: 3500
    },
    coal: {
      money: 1500
    },
    common: {
      money: 200
    },
    uncommon: {
      money: 2000
    },
    mythic: {
      money: 25000
    },
    legendary: {
      money: 75000
    },
    foodpet: {
      money: 3500
    },
    Fox: {
      money: 40000
    },
    naga: {
      money: 120000
    },
    pet: {
      money: 120000
    },
    anggur: {
      money: 2000
    },
    apel: {
      money: 2000
    },
    batu: {
      money: 2000
    },
    berlian: {
      money: 2000
    },
    bibitanggur: {
      money: 2000
    },
    bibitapel: {
      money: 2000
    },
    bibitjeruk: {
      money: 2000
    },
    bibitmangga: {
      money: 2000
    },
    bibitpisang: {
      money: 2000
    },
    botol: {
      money: 2000
    },
    centaur: {
      money: 2000
    },
    eleksirb: {
      money: 2000
    },
    emasbatang: {
      money: 2000
    },
    emasbiasa: {
      money: 2000
    },
    exp: {
      money: 2000
    },
    gardenboc: {
      money: 2000
    },
    gardenboxs: {
      money: 2000
    },
    griffin: {
      money: 2000
    },
    healtmonster: {
      money: 2000
    },
    jeruk: {
      money: 2000
    },
    kaleng: {
      money: 2000
    },
    kardus: {
      money: 2000
    },
    kayu: {
      money: 2000
    },
    ketake: {
      money: 2000
    },
    koinexpg: {
      money: 2000
    },
    kucing: {
      money: 2000
    },
    kuda: {
      money: 2000
    },
    kyubi: {
      money: 2000
    },
    makanancentaur: {
      money: 2000
    },
    makanangriffin: {
      money: 2000
    },
    makanankyubi: {
      money: 2000
    },
    makanannaga: {
      money: 2000
    },
    makananpet: {
      money: 2000
    },
    makananphonix: {
      money: 2000
    },
    mangga: {
      money: 2000
    },
    pancingan: {
      money: 2000
    },
    phonix: {
      money: 2000
    },
    pisang: {
      money: 2000
    },
    rubah: {
      money: 2000
    },
    sampah: {
      money: 2000
    },
    serigala: {
      money: 2000
    },
    sword: {
      money: 2000
    },
    tiketcoin: {
      money: 2000
    },
    umpan: {
      money: 2000
    }
  },
  sell: {
    limit: {
      exp: 999
    },
    potion: {
      money: 1250
    },
    aqua: {
      money: 500
    },
    trash: {
      money: 40
    },
    wood: {
      money: 700
    },
    rock: {
      money: 850
    },
    string: {
      money: 400
    },
    iron: {
      money: 3000
    },
    diamond: {
      money: 7500
    },
    emerald: {
      money: 8500
    },
    gold: {
      money: 3500
    },
    coal: {
      money: 1500
    },
    common: {
      money: 200
    },
    uncommon: {
      money: 2000
    },
    mythic: {
      money: 25000
    },
    legendary: {
      money: 75000
    },
    foodpet: {
      money: 3500
    },
    Fox: {
      money: 40000
    },
    naga: {
      money: 120000
    },
    pet: {
      money: 120000
    },
    anggur: {
      money: 2000
    },
    apel: {
      money: 2000
    },
    batu: {
      money: 2000
    },
    berlian: {
      money: 2000
    },
    bibitanggur: {
      money: 2000
    },
    bibitapel: {
      money: 2000
    },
    bibitjeruk: {
      money: 2000
    },
    bibitmangga: {
      money: 2000
    },
    bibitpisang: {
      money: 2000
    },
    botol: {
      money: 2000
    },
    centaur: {
      money: 2000
    },
    eleksirb: {
      money: 2000
    },
    emasbatang: {
      money: 2000
    },
    emasbiasa: {
      money: 2000
    },
    gardenboc: {
      money: 2000
    },
    gardenboxs: {
      money: 2000
    },
    griffin: {
      money: 2000
    },
    healtmonster: {
      money: 2000
    },
    jeruk: {
      money: 2000
    },
    kaleng: {
      money: 2000
    },
    kardus: {
      money: 2000
    },
    kayu: {
      money: 2000
    },
    ketake: {
      money: 2000
    },
    koinexpg: {
      money: 2000
    },
    kucing: {
      money: 2000
    },
    kuda: {
      money: 2000
    },
    kyubi: {
      money: 2000
    },
    makanancentaur: {
      money: 2000
    },
    makanangriffin: {
      money: 2000
    },
    makanankyubi: {
      money: 2000
    },
    makanannaga: {
      money: 2000
    },
    makananpet: {
      money: 2000
    },
    makananphonix: {
      money: 2000
    },
    mangga: {
      money: 2000
    },
    pancingan: {
      money: 2000
    },
    phonix: {
      money: 2000
    },
    pisang: {
      money: 2000
    },
    rubah: {
      money: 2000
    },
    sampah: {
      money: 2000
    },
    serigala: {
      money: 2000
    },
    sword: {
      money: 2000
    },
    tiketcoin: {
      money: 2000
    },
    kepiting: {
      money: 7000
    },
    lobster: {
      money: 7000
    },
    udang: {
      money: 7000
    },
    cumi: {
      money: 7000
    },
    gurita: {
      money: 7000
    },
    buntal: {
      money: 7000
    },
    dory: {
      money: 7000
    },
    orca: {
      money: 7000
    },
    lumba: {
      money: 7000
    },
    paus: {
      money: 7000
    },
    ikan: {
      money: 7000
    },
    hiu: {
      money: 7000
    },
    banteng: {
      money: 9000
    },
    harimau: {
      money: 9000
    },
    gajah: {
      money: 9000
    },
    kambing: {
      money: 9000
    },
    panda: {
      money: 9000
    },
    buaya: {
      money: 9000
    },
    kerbau: {
      money: 9000
    },
    sapi: {
      money: 9000
    },
    monyet: {
      money: 9000
    },
    babihutan: {
      money: 9000
    },
    babi: {
      money: 9000
    },
    ayam: {
      money: 9000
    },
    umpan: {
      money: 2000
    }
  }
}

/*function randomizePrices() {
  let changes = [];
  for (let category in items) {
    for (let item in items[category]) {
      let oldPrice = items[category][item].money;
      let randomFactor;
      if (category === 'buy') {
        // For 'buy' category, 60% chance to increase the price by up to 20%, 40% chance to decrease
        randomFactor = Math.random() < 0.6 ? Math.random() * 0.2 + 1 : Math.random() * 0.2 + 0.8;
      } else {
        // For 'sell' category, 60% chance to decrease the price by up to 20%, 40% chance to increase
        randomFactor = Math.random() < 0.6 ? Math.random() * 0.2 + 0.8 : Math.random() * 0.2 + 1;
      }
      let newPrice = Math.round(oldPrice * randomFactor);
      items[category][item].money = newPrice;
      if (newPrice > oldPrice) {
        let increase = ((newPrice - oldPrice) / oldPrice) * 100;
        changes.push(`${item} in ${category} increased by ${increase.toFixed(2)}%`);
      }
    }
  }}

// Randomize prices every hour
setInterval(randomizePrices, 10 * 1000);

// Rest of your code...*/

const emojis = {
  agility: '🤸‍♂️',
  anggur: '🍇',
  apel: '🍎',
  aqua: '💧',
  arc: '🏹',
  armor: '🥼',
  ayam: '🐓',
  babi: '🐖',
  babihutan: '🐗',
  bank: '🏦',
  banteng: '🐂',
  batu: '🪨',
  berlian: '💎',
  bibitanggur: '🍇',
  bibitapel: '🍎',
  bibitjeruk: '🍊',
  bibitmangga: '🥭',
  bibitpisang: '🍌',
  botol: '🍾',
  bow: '🏹',
  bull: '🐃',
  buntal: '🐡',
  buaya: '🐊',
  cat: '🐈',
  centaur: '🐎',
  chicken: '🐓',
  coal: '🔲',
  common: '🔘',
  cow: '🐄',
  crystal: '🔮',
  cumi: '🦑',
  darkcrystal: '♠️',
  diamond: '💎',
  dory: '🐠',
  dog: '🐕',
  dragon: '🐉',
  elephant: '🐘',
  emasbatang: '🥇',
  emasbiasa: '🥇',
  emerald: '💚',
  exp: '✉️',
  fishingrod: '🎣',
  foodpet: '🍖',
  fox: '🦊',
  Fox: '🦊',
  gajah: '🐘',
  gardenboc: '🌳',
  gardenboxs: '🌳',
  gems: '🍀',
  giraffe: '🦒',
  gold: '👑',
  griffin: '🦅',
  gurita: '🐙',
  harimau: '🐅',
  health: '❤️',
  healtmonster: '💊',
  hiu: '🦈',
  horse: '🐎',
  ikan: '🐠',
  iron: '⛓️',
  intelligence: '🧠',
  jeruk: '🍊',
  kaleng: '🥫',
  kambing: '🐐',
  kardus: '📦',
  kepiting: '🦀',
  kerbau: '🐃',
  ketake: '🪓',
  keygold: '🔑',
  keyiron: '🗝️',
  knife: '🔪',
  koinexpg: '💰',
  kucing: '🐈',
  kuda: '🐎',
  kyubi: '🦊',
  legendary: '🗃️',
  level: '🧬',
  limit: '🌌',
  lion: '🦁',
  lobster: '🦞',
  lumba: '🐬',
  magicwand: '⚕️',
  mana: '🪄',
  makanancentaur: '🍖',
  makanangriffin: '🍖',
  makanankyubi: '🍖',
  makanannaga: '🍖',
  makananpet: '🍖',
  makananphonix: '🍖',
  mangga: '🥭',
  money: '💵',
  monyet: '🐒',
  mythic: '🗳️',
  naga: '🐉',
  orca: '🐋',
  paus: '🐳',
  pancingan: '🎣',
  panda: '🐼',
  pet: '🎁',
  petFood: '🍖',
  phonix: '🔥',
  pickaxe: '⛏️',
  pisang: '🍌',
  pointxp: '📧',
  potion: '🥤',
  rock: '🪨',
  rubah: '🦊',
  sampah: '🗑️',
  sapi: '🐄',
  serigala: '🐺',
  snake: '🐍',
  stamina: '⚡',
  strength: '🦹‍♀️',
  string: '🕸️',
  superior: '💼',
  sword: '⚔️',
  tiger: '🐅',
  tiketcoin: '🎟️',
  trash: '🗑',
  uncommon: '🎁',
  udang: '🦐',
  umpan: '🎣',
  upgrader: '🧰',
  wood: '🪵'
};


let priceChanges = [];
let originalPrices = JSON.parse(JSON.stringify(items)); // Save the original prices

// Function to randomize prices
function randomizePrices() {
  priceChanges = [];// Reset price changes
  for (let category in items) {
    for (let item in items[category]) {
      let oldPrice = originalPrices[category][item].money; // Use the original price
      let randomFactor;
      if (category === 'buy') {
        // For 'buy' category, 60% chance to increase the price by up to 20%, 40% chance to decrease
        randomFactor = Math.random() < 0.6 ? Math.random() * 0.2 + 1 : Math.random() * 0.2 + 0.8;
      } else {
        // For 'sell' category, 60% chance to decrease the price by up to 20%, 40% chance to increase
        randomFactor = Math.random() < 0.6 ? Math.random() * 0.2 + 0.8 : Math.random() * 0.2 + 1;
      }
      let newPrice = Math.round(oldPrice * randomFactor);
      // Ensure that the 'buy' price is not cheaper than the 'sell' price
      if (category === 'buy' && items.sell[item] && newPrice < items.sell[item].money) {
        newPrice = items.sell[item].money;
      }
      items[category][item].money = newPrice;
      if (newPrice > oldPrice) {
        let increase = ((newPrice - oldPrice) / oldPrice) * 100;
        if (category === 'buy') {
          priceChanges.push(`⚠️ ${emojis[item] || ''} ${item} in ${category} naik by ${increase.toFixed(2)}%\n`);
        } else {
          priceChanges.push(`✅ ${emojis[item] || ''} ${item} in ${category} naik by ${increase.toFixed(2)}%\n`);
        }
      } else if (newPrice < oldPrice) {
        let decrease = ((oldPrice - newPrice) / oldPrice) * 100;
        if (category === 'buy') {
          priceChanges.push(`✅ ${emojis[item] || ''} ${item} in ${category} turun by ${decrease.toFixed(2)}%\n`);
        } else {
          if (decrease > 20) {
            priceChanges.push(`⚠️⚠️⚠️ ${emojis[item] || ''} ${item} in ${category} turun by ${decrease.toFixed(2)}%\n`);
          } else {
            priceChanges.push(`⚠️ ${emojis[item] || ''} ${item} in ${category} turun by ${decrease.toFixed(2)}%\n`);
          }
        }
      }
    }
  }
}

// Randomize prices every 5 seconds
setInterval(randomizePrices, 10 * 60 * 1000);

// Later in your code...
//m.reply(priceChanges.join('\n'));





let handler = async (m, { command, usedPrefix, args }) => {
  let user = global.db.data.users[m.sender]
  const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
  //const chn = changes
  const info = `
Use Format *${usedPrefix}${command} [crate] [count]*
Usage example: *${usedPrefix}${command} potion 10*

⚠️ Harga Bisa Naik/Turun Setiap 10 Menit ⚠️


📍Items list: 
${Object.keys(listItems).map((v) => {
    let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
    return `${global.rpg.emoticon(v)}${v} | ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
  }).join('\n')}\n\n⬇️⬆️Info Harga Naik/Turun:\n${priceChanges}
`.trim()
  const item = (args[0] || '').toLowerCase()
  const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
  if (!listItems[item]) return m.reply(info)
  if (command.toLowerCase() == 'buy') {
    let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
    if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`You don't have enough ${global.rpg.emoticon(paymentMethod)}${paymentMethod} to buy *${total}* ${global.rpg.emoticon(item)}${item}. You need *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* more ${paymentMethod} to be able to buy`)
    if (user.limitbuy < 0) return m.reply(`Maaf Anda Mencapai Limit Buy, Silahkan Tunggu 10 Menit Lagi`)
    if (user.limitbuy < 20) return m.reply(`Maaf Limit Buy Anda Di Bawah 20, Silahkan Tunggu 10 Menit Lagi`)
    if (user.limitbuy < total) return m.reply(`Maaf Anda Mencapai Limit Buy, Silahkan Tunggu 10 Menit Lagi\nSisa Limit Buy: ${user.limitbuy}`)
    user[paymentMethod] -= listItems[item][paymentMethod] * total
    user.limitbuy -= total
    const buyinfo = user.limitbuy
    user[item] += total
    return m.reply(`You bought *${total}* ${global.rpg.emoticon(item)}${item} \n *-${(listItems[item][paymentMethod] * total)} ${paymentMethod}*\n\nSisa Limit Buy: ${buyinfo}`)
  } else {
    if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
    user[item] -= total
    user.money += listItems[item].money * total
    const duit = listItems[item].money * total
    return m.reply(`Kamu Menjual *${total}*\nDuit: ${duit}`)
  }
}


handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}