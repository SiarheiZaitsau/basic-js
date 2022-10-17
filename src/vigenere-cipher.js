const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  encrypt(str, key) {
    if (typeof str !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    let strUpd = str.toUpperCase(),
      keyUpd = key.padEnd(strUpd.replaceAll(" ", "").length, key).toUpperCase(),
      x = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(strUpd[i])) {
        const index = this.alphabet.indexOf(keyUpd[count]);
        const alphabetUpd =
          this.alphabet.substring(index) + this.alphabet.slice(0, index);
        x += alphabetUpd[this.alphabet.indexOf(strUpd[i])];
        count++;
      } else {
        x += strUpd[i];
      }
    }
    return this.mode ? x : x.split("").reverse().join("");
  }
  decrypt(str, key) {
    if (typeof str !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
    let strUpd = str.toUpperCase(),
      keyUpd = key.padEnd(strUpd.replaceAll(" ", "").length, key).toUpperCase(),
      x = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(strUpd[i])) {
        const index = this.alphabet.indexOf(keyUpd[count]);
        const alphabetUpd =
          this.alphabet.substring(index) + this.alphabet.slice(0, index);
        x += this.alphabet[alphabetUpd.indexOf(strUpd[i])];
        count++;
      } else {
        x += strUpd[i];
      }
    }
    return this.mode ? x : x.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
