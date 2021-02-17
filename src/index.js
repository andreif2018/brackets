module.exports = function check(str, bracketsConfig) {
  let parser = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      existance: 0,
  }
  let flat = [];
  for (let item of bracketsConfig) {
      flat.push(item[0]);
      flat.push(item[1]);
  }
  for (let char of str.split("")) {
      if (!flat.includes(char)) return false;
      if (char === '(') parser.first += 1;
      if (char === ')' && parser.first ===0) return false;
      if (char === ')') parser.first -= 1;
      if (char === '[') parser.second += 1;
      if (char === ']' && parser.second ===0) return false;
      if (char === ']') parser.second -= 1;
      if (char === '{') parser.third += 1;
      if (char === '}' && parser.third ===0) return false;
      if (char === '}') parser.third -= 1;
      if (char === '|') parser.fourth += 1;
  }
  if (parser.first%2 > 0 || parser.second%2 > 0 || parser.third%2 > 0 || parser.fourth%2 > 0) return false;
  return true;
}

t = module.exports('()', [['(', ')'], ['[', ']'], ['{', '}']]);
console.log(t);

/*
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

* */
