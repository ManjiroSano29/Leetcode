//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses

var generateParenthesis = function (n) {
    const result = [];
    let [open, close] = [n, n];
    const helper = ([open, close], paren = "") => {
      if (open === 0 && close === 0) {
        result.push(paren);
        return;
      }
      if (open > 0) {
        helper([open - 1, close], paren + "(");
      }
      if (open < close && close > 0) {
        helper([open, close - 1], paren + ")");
      }
    };
    helper([open, close]);
    return result;
  };

console.log(generateParenthesis(0))