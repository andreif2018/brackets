module.exports = function check(str, bracketsConfig) {
    let flat = [];
    for (let item of bracketsConfig) {
      flat.push(item[0]);
      flat.push(item[1]);
    }
    for (let char of str.split("")) {
        if (!flat.includes(char)) return false;
    }
    const regex = /12|34|56|77|88|{}|\(\)|\[]|\|\|/g;
    if (str.match(regex) && str.length > 0) return internal(str.replace(regex, ''), regex);
    else if (!str.match(regex) && str.length > 0) return false;
    else return true;

}
function internal(str, regex) {
    if (str.match(regex) && str.length > 0) return internal(str.replace(regex, ''), regex);
    else if (!str.match(regex) && str.length > 0) return false;
    else return true;
}
