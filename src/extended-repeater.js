const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = str;
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  let additionDefault = "";
  let separatorDefault = "+";
  let additionalSeparatorDefault = "|";

  if (separator) {
    separatorDefault = separator;
  }

  if (additionSeparator) {
    additionalSeparatorDefault = additionSeparator;
  }

  if (addition) {
    additionDefault = addition;
  } else if (typeof addition === "boolean") {
    additionDefault = addition.toString();
  } else if (addition == null && addition !== undefined) {
    additionDefault = "null";
  }

  for (let j = 1; j < additionRepeatTimes; j++) {
    additionDefault += (additionalSeparatorDefault || "") + addition;
  }

  if (repeatTimes) {
    for (let i = 1; i < repeatTimes; i++) {
      res += additionDefault + separatorDefault + str;
    }
  }

  res += additionDefault;

  return res;
}

module.exports = {
  repeater,
};
