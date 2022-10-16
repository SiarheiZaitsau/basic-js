const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let letters = [];
  members.forEach((member) => {
    if (member && typeof member === "string") {
      letters.push(member.trim()[0]);
    }
  });
  const res = letters
    .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
    .reduce((acc, cur) => {
      return (acc += cur.toUpperCase());
    }, "");
  return res;
}

module.exports = {
  createDreamTeam,
};
