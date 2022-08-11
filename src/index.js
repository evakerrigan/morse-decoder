const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const NUMBER_MORSE_TABLE = {};

//console.log('"hello world"');

//const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
let letter = [];
let result = '';
//console.log('expr.length = ', expr.length);


for (i=0; i<expr.length; i=i+10) {
  letter.push(expr.slice(i, i+10));  
}
//console.log('letter = ', letter);

const lengthAlphabet = Object.keys(MORSE_TABLE).length;
//console.log('MORSE_TABLE.length = ', Object.keys(MORSE_TABLE).length);

for (x=0; x<lengthAlphabet; x=x+1) {

  let arrKey = Object.keys(MORSE_TABLE)[x];
  //console.log('arrKey = ', arrKey);
  let arrKey2 = arrKey.replace( /\./g, "10" ).replace( /-/g, "11" );  
  //console.log('arrKey2 = ', arrKey2);

  let arrKey3 = arrKey2;

        if (arrKey3.length < 10) {
          let counter = 10 - arrKey3.length;
          for (z=0; z<counter; z++) {
            arrKey3 = '0' + arrKey3;
          } 
          //console.log('arrKey3 = ', arrKey3);
        }
  NUMBER_MORSE_TABLE[arrKey3] = Object.values(MORSE_TABLE)[x];

}
//console.log('NUMBER_MORSE_TABLE.length = ', Object.keys(NUMBER_MORSE_TABLE).length);
//console.log('NUMBER_MORSE_TABLE = ', NUMBER_MORSE_TABLE);

NUMBER_MORSE_TABLE['**********'] = ' ';

//console.log('NUMBER_MORSE_TABLE = ', NUMBER_MORSE_TABLE);
//console.log('NUMBER_MORSE_TABLE.length = ', Object.keys(NUMBER_MORSE_TABLE).length);

for (j=0; j<letter.length; j++) {

  let add = NUMBER_MORSE_TABLE[letter[j]];

  result = result + add;

}

//console.log('result = ', result);
return result;


    





}

module.exports = {
    decode
}