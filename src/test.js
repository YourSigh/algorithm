const numbers = ['abc01.126', 'abc01.134', 'abc01.125', 'abc01.126', 'abc01.127', 'abc01.128', 'abc01.129', 'abc01.130', 'abc01.131', 'abc01.132', 'abc01.133', ''];

numbers.sort((a, b) => {
  const numA = parseFloat(a.slice(3)) || 0;
  const numB = parseFloat(b.slice(3)) || 0;
  return numA - numB;
});

console.log(numbers);
