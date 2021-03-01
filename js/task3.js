const checkParentheses = (str) => {
    let openedParentheses = ['(', '[', '{'];
    let closedParentheses = [')',']', '}'];
    let findedParentheses = [];

    for (let i = 0; i < str.length; i++) {
        if(closedParentheses.includes(str[i])){
            if(findedParentheses.length === 0)
                return false;
            if(
                findedParentheses[findedParentheses.length-1].charCodeAt() === str[i].charCodeAt() - 1 || 
                findedParentheses[findedParentheses.length-1].charCodeAt() === str[i].charCodeAt() - 2
            ){
                findedParentheses.pop();
            } 
        }
        if(openedParentheses.includes(str[i])) {
            findedParentheses.push(str[i]);
        }
    }

    return findedParentheses.length === 0 ? true : false;
 }

// console.log(checkParentheses('--()--')) // true
// console.log(checkParentheses('-a]--[')) // false
// console.log(checkParentheses('dsa{vsfs{ad')) // false
// console.log(checkParentheses('j78(g5b]uyg')) // false
// console.log(checkParentheses(',m{i987y}hj')) // true
// console.log(checkParentheses('dsa[3ed---:]::')) // true