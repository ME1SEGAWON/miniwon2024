import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH');
let wibm = moment.tz('Asia/Jakarta').format('mm');
let wibs = moment.tz('Asia/Jakarta').format('ss');
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

let d = new Date(new Date + 3600000);
let locale = 'id';
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

global.owner = [
  ['6285641463294', 'SEGAWON', true],
  ['62895336282144', 'Ob2', true]
];
global.mods = [];
global.prems = ['6285641463294'];
global.nomorbot = '6285641463294';
global.nomorown = '6285641463294'; // Owner Utama
//global.nomorown1 = '628570442454'; 
//global.nomorown2 = '628570442454';
global.nomorwa = '6285641463294';

global.readMore = readMore;
global.author = 'ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.namebot = 'ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.wm = '© ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.watermark = wm;
global.wm2 = 'ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`;
global.bottime = `Time: ${wktuwib}`;
global.titlebot = 'ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.stickpack = 'ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.stickauth = '© ɃȺĐ ȺⱣⱣŁɆ X MINIWON';
global.week = `${week} ${date}`;
global.wibb = `${wktuwib}`;
global.nameown1 = 'SEGAWON';
global.nameown2 = 'ɃȺĐ ȺⱣⱣŁɆ';
global.Linkgc = 'https://chat.whatsapp.com/CtrfJ1eEzVEEf1jXkg3UvJ';
global.lynk = '-';
//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.sig = 'https://www.instagram.com/mada_bogo'; //instagram
global.sgh = 'https://github.com/ME1SEGAWON'; //github
global.sgc = 'https://chat.whatsapp.com/CtrfJ1eEzVEEf1jXkg3UvJ'; //group whatsapp
global.sdc = '-'; //discord
global.snh = 'Not Have'; //youtube
//Donasi/Payment
global.pdana = '0856-4146-3294'; // dana
global.povo = '0856-4146-3294';
global.pgopay = '0856-4146-3294'; // gopay
global.plinkaja = '-'; //link aja
global.ppulsa = '0856-4146-3294'; // pulsa
global.ppulsa2 = '-'; //pulsa 2
// wait proses
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....';
global.wait = '_Sedang Di Proses, Mohon Tunggu_....';
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!';
global.multiplier = 69; // The higher, The harder levelup
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '•⟅━━━ ❨'
global.LyAtas2 = '❩'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '❏ *DASHBOARD* ❏'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '『' // Hiasan Titile (KIRI)
global.htka = '』' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '✦'    //hiasan Doang :v
global.hsquere = ['⛶', '❏', '⫹⫺']



global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      agility: '🤸‍♂️',
        arc: '🏹',
        armor: '🥼',
        bank: '🏦',
        bibitanggur: '🍇',
        bibitapel: '🍎',
        bibitjeruk: '🍊',
        bibitmangga: '🥭',
        bibitpisang: '🍌',
        bow: '🏹',
        bull: '🐃',
        cat: '🐈',
        chicken: '🐓',
        common: '🔘',
        cow: '🐄',
        crystal: '🔮',
        darkcrystal: '♠️',
        diamond: '💎',
        dog: '🐕',
        dragon: '🐉',
        elephant: '🐘',
        emerald: '💚',
        exp: '✉️',
        fishingrod: '🎣',
        fox: '🦊',
        gems: '🍀',
        giraffe: '🦒',
        gold: '👑',
        health: '❤️',
        horse: '🐎',
        kepiting: '🦀',
        lobster: '🦞',
        udang: '🦐',
        cumi: '🦑',
        gurita: '🐙',
        buntal: '🐡',
        dory: '🐟',
        orca: '🐋',
        lumba: '🐬',
        paus: '🐳',
        ikan: '🐠',
        hiu: '🦈',
        banteng: '🐂',
        harimau: '🐅',
        gajah: '🐘',
        kambing: '🐐',
        panda: '🐼',
        buaya: '🐊',
        kerbau: '🐃',
        sapi: '🐄',
        monyet: '🐒',
        babihutan: '🐗',
        babi: '🐖',
        ayam: '🐓',
        intelligence: '🧠',
        iron: '⛓️',
        keygold: '🔑',
        keyiron: '🗝️',
        knife: '🔪',
        legendary: '🗃️',
        level: '🧬',
        limit: '🌌',
        lion: '🦁',
        magicwand: '⚕️',
        mana: '🪄',
        money: '💵',
        mythic: '🗳️',
        pet: '🎁',
        petFood: '🍖',
        pickaxe: '⛏️',
        pointxp: '📧',
        potion: '🥤',
        rock: '🪨',
        snake: '🐍',
        stamina: '⚡',
        strength: '🦹‍♀️',
        string: '🕸️',
        superior: '💼',
        sword: '⚔️',
        tiger: '🐅',
        trash: '🗑',
        uncommon: '🎁',
        upgrader: '🧰',
        wood: '🪵',
        // New emojis
        aqua: '💧',
        foodpet: '🍖',
        coal: '🔲',
        Fox: '🦊',
        naga: '🐉',
        anggur: '🍇',
        apel: '🍎',
        batu: '🪨',
        berlian: '💎',
        botol: '🍾',
        centaur: '🐎',
        eleksirb: '🧪',
        emasbatang: '🥇',
        emasbiasa: '🥇',
        gardenboc: '🌳',
        gardenboxs: '🌳',
        griffin: '🦅',
        healtmonster: '💊',
        jeruk: '🍊',
        kaleng: '🥫',
        kardus: '📦',
        ketake: '🪓',
        koinexpg: '💰',
        kucing: '🐈',
        kuda: '🐎',
        kyubi: '🦊',
        makanancentaur: '🍖',
        makanangriffin: '🍖',
        makanankyubi: '🍖',
        makanannaga: '🍖',
        makananpet: '🍖',
        makananphonix: '🍖',
        mangga: '🥭',
        pancingan: '🎣',
        phonix: '🔥',
        pisang: '🍌',
        rubah: '🦊',
        sampah: '🗑️',
        serigala: '🐺',
        tiketcoin: '🎟️',
        kepiting: '🦀',
        lobster: '🦞',
        udang: '🦐',
        cumi: '🦑',
        gurita: '🐙',
        buntal: '🐡',
        dory: '🐠',
        orca: '🐋',
        lumba: '🐬',
        paus: '🐳',
        ikan: '🐟',
        hiu: '🦈',
        banteng: '🐂',
        harimau: '🐅',
        gajah: '🐘',
        kambing: '🐐',
        panda: '🐼',
        buaya: '🐊',
        kerbau: '🐃',
        sapi: '🐄',
        monyet: '🐒',
        babihutan: '🐗',
        babi: '🐖',
        ayam: '🐓',
        umpan: '🎣'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.uptime = ''; // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.openai = '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';  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-zQBKfVg4odom4Qt7UMsFSJHX';  //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'; // https://deepai.org
global.zenzkey = 'zenzkey_1ec92f71d3bb';
global.lolkey = '85faf717d0545d14074659ad';
global.rose = '7bbbf7df4aaae5c9f807b347';
global.xzn = 'kreya';
global.zeltoria = 'Elistz'//ganti dengan apikey yang kamu dapat dari https://xzn.wtf
global.APIs = {
  lol: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.site',
  xzn: 'https://xzn.wtf',
  zeltoria: 'https://api.zeltoria.my.id'
};

global.APIKeys = {
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.itsrose.site': 'Rs-Danil_Elistz'
};

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
global.dpdf = 'application/pdf';
global.drtf = 'text/rtf';
global.optsnsfw = true;
global.premnsfw = true;
// foto/image bot
//ganti aja kalau ga tau cara gantinya buka telegra.ph upload
//foto nya di situ terus salin link nya kesini

global.fsizedoc = '999';
global.fpagedoc = '999';

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
