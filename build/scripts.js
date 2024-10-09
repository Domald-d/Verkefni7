/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if(isString(str)){
    const split = str.split(' ');
    let staerst = split[0];
    for(let i = 1; i < split.length; i++){
      if(split[i].length > staerst.length){
        staerst = split[i];
      }
    }
    return staerst;
  }
  return null;
}
console.assert(longest('Halló Heimur!!') === 'Heimur!!', 'longest: finnur lengsta streng i streng');
console.assert(longest(false) === null, 'longest: ef ekki strengur skila null');

function shortest(str) {
  if(isString(str)){
    const split = str.split(' ');
    let minnst = split[0];
    for(let i = 1; i < split.length;i++){
      if(split[i].length < minnst.length){
        minnst = split[i]
      }
    }
    return minnst;
  }
  return null;
}

console.assert(shortest('halló heimur!') === 'halló', 'shortest: finnur stysta orð í streng');
console.assert(shortest(false) === null, 'shorest: ef ekki strengur skila null');

function reverse(str) {
  if(isString(str)){
    const split = str.split('');
    const reversed = split.reverse();
  
    return reversed.join('')
  }
  return null;
}
console.assert(reverse('hæ') === 'æh', 'reverse: snýr við einföldum streng');
console.assert(reverse(false) === null, 'reverse: ef ekki strengur skila null');

function palindrome(str) {
  if(isString(str)){
    if(str.trim() === ''){
      return false;
    }
    let reverse = str.split('').reverse().join('');
    return str === reverse;
  }
  return null;
}
console.assert(palindrome('hæh') === true, 'palindrome: skoðum hvort strengur er samhverfur');
console.assert(palindrome('') === false, 'palindrome: ef strengur ef tómur skilum false');
console.assert(palindrome(false) === null, 'ef strengur er ekki strengur skilum null');

function vowels(str) {
  if(isString(str)){
    let fjoldi = 0;
    for(let stafur in VOWELS){
      let vow = VOWELS[stafur];
      if(str.includes(vow)){
        fjoldi++;
      }
    }
    return fjoldi;
  }
  return 0;
}
console.assert(vowels('hæ ég') === 2, 'vowels: skilar fjölda sérhljóða í streng');
console.assert(vowels('') === 0, 'vowels: ef strengur er tómur skilum við núll');
console.assert(vowels(false) === 0, 'vowels: ef strengur er ekki strengur skilum við núll');

function consonants(str) {
  if(isString(str)){
    let fjoldi = 0;
    for(let stafur in CONSONANTS){
      let cons = CONSONANTS[stafur]
      if(str.includes(cons)){
        fjoldi++;
      }
    }
    return fjoldi;
  }
  return 0;
}
console.assert(consonants('bad') === 2, 'consonants: skilar fjölda samhljóða í streng');
console.assert(consonants('') === 0, 'consonants: ef strengur er tómur skilum við núll');
console.assert(consonants(false) === 0, 'consonant: ef strengur er ekki strengur skilum við núll');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  while(true){
    alert("sláðu inn streng með nokkur orðum til að fá upplýsingar um: \n -lengsta orðið \n -Stysta orðið \n -Streng snúnum við \n -fjölda sérhljóða \n -fjölda samhljóða \n -hvort strengur sé samhverfur");
    const str = prompt('Sláðu inn streng með nokkrum orðum','');
    if (str === null) {
      break; // Exit the loop if the user presses cancel
    }
    let lengst = longest(str);
    let styst = shortest(str);
    let pal = palindrome(str);
    let ofugur = reverse(str);
    let serhljod = vowels(str);
    let samhljod = consonants(str);
    if(pal === true){
      let msg = 'samhverfur';
      alert('lengsta orðið er: '+lengst+'\n stysta orðið er: '+styst+'\n Strengurinn snúinn við: '+ofugur+'\n fjöldi sérhljóða í streng er: '+serhljod+'\n fjöldi samhljóða í streng er: '+samhljod+'\n Strengurinn er: '+msg);
    }else{
      let msg = 'ósamhverfur';
      alert('lengsta orðið er: '+lengst+'\n stysta orðið er: '+styst+'\n Strengurinn snúinn við: '+ofugur+'\n fjöldi sérhljóða í streng er: '+serhljod+'\n fjöldi samhljóða í streng er: '+samhljod+'\n Strengurinn er: '+msg);
    }
  }
  
}
