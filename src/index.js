function chkparenthesis(expression) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const matchingBrackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let char of expression) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastBracket = stack.pop();
            if (matchingBrackets[lastBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = chkparenthesis;
