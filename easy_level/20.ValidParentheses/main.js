const isValid = (string) => {
  const s = string.split();
  const valid = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (valid[s[i]]) {
      stack.push(s[i]);
      console.log(stack);
    } else {
      console.log(stack);
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }

  return stack.length > 0 ? false : true;
};

isValid('()');
