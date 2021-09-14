const methods = require('./index');

//Odd or Even Test
describe("Odd or Even Test", () => {
  test('3 is odd', () => {
    expect(methods.oddOrEven(3)).toBe("odd");
  });

  test('2 is even', () => {
    expect(methods.oddOrEven(2)).toBe("even");
  });

  test('1000 is odd', () => {
    expect(methods.oddOrEven(1000)).toBe("even");
  });

  test('79 is odd', () => {
    expect(methods.oddOrEven(79)).toBe("odd");
  });
})

//Less Than 100 Test
describe("Less Than 100 Test", () => {
  test("10 + 10 is less than 100", () => {
    expect(methods.lessThanOneHundred(10, 10)).toBe(true);
  });

  test("100 + 10 is not less than 100", () => {
    expect(methods.lessThanOneHundred(100, 10)).toBe(false);
  });

  test("50 + 50 is not less than 100", () => {
    expect(methods.lessThanOneHundred(50, 50)).toBe(false);
  });

  test("0 + 0 is less than 100", () => {
    expect(methods.lessThanOneHundred(0, 0)).toBe(true);
  });
})

describe("FizzBuzz Test", () => {
  test("FizzBuzz from 1 to 15", () => {
    expect(methods.fizzbuzz(1, 15)).toStrictEqual([
  1,          2,
  'Fizz',     4,
  'Buzz',     'Fizz',
  7,          8,
  'Fizz',     'Buzz',
  11,         'Fizz',
  13,         14,
  'FizzBuzz'
])
  });

  test("FizzBuzz from 1 to 5", () => {
    expect(methods.fizzbuzz(1, 5)).toStrictEqual([ 1, 2, 'Fizz', 4, 'Buzz' ])
  });

  test("FizzBuzz from 25 to 50", () => {
    expect(methods.fizzbuzz(25, 50)).toStrictEqual([
  'Buzz', 26,     'Fizz',
  28,     29,     'FizzBuzz',
  31,     32,     'Fizz',
  34,     'Buzz', 'Fizz',
  37,     38,     'Fizz',
  'Buzz', 41,     'Fizz',
  43,     44,     'FizzBuzz',
  46,     47,     'Fizz',
  49,     'Buzz'
])
  });

  test("FizzBuzz from 1 to 100", () => {
    expect(methods.fizzbuzz(1, 100)).toStrictEqual([
  1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
  7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
  13,     14,     'FizzBuzz', 16,     17,     'Fizz',
  19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
  'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
  31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
  37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
  43,     44,     'FizzBuzz', 46,     47,     'Fizz',
  49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
  'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
  61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
  67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
  73,     74,     'FizzBuzz', 76,     77,     'Fizz',
  79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
  'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
  91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
  97,     98,     'Fizz',     'Buzz'
])
  });

  test("FizzBuzz from 25 to 10 is invalid", () => {
    expect(methods.fizzbuzz(25, 10)).toBe("invalid numbers");
  })

  test("FizzBuzz from 25 to 25 is invalid", () => {
    expect(methods.fizzbuzz(25, 25)).toBe("invalid numbers");
  })
})

describe("Sum Everything in an Array Test", () => {
  test("[1, 2, 3, 4, 5] is 15", () => {
    expect(methods.sumAll([1, 2, 3, 4, 5])).toBe(15);
  })

  test("[-9, 10, 37, 27, 11] is 76", () => {
    expect(methods.sumAll([-9, 10, 37, 27, 11])).toBe(76);
  })

  test("[56, 283, 11111, 283, 472, 1872, 37] is 14114", () => {
    expect(methods.sumAll([56, 283, 11111, 283, 472, 1872, 37])).toBe(14114);
  })

  test("[56, 283, 11111, 283, 472, 1872, 37, -10000000] is -9985886", () => {
    expect(methods.sumAll([56, 283, 11111, 283, 472, 1872, 37, -10000000])).toBe(-9985886);
  })
})

describe("Reverse Array Test", () => {
  test("[1, 2, 3, 4, 5] reversed is [5, 4, 3, 2, 1]", () => {
    expect(methods.reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  })

  test("[3, 5, 1, 7, 4, 2, 4, 3] reversed is [3, 4, 2, 4, 7, 1, 5, 3]", () => {
    expect(methods.reverseArray([3, 5, 1, 7, 4, 2, 4, 3])).toStrictEqual([
  3, 4, 2, 4,
  7, 1, 5, 3
]);
  })

  test("[1, 1, 1, 1, 1, 1] reversed is [1, 1, 1, 1, 1, 1]", () => {
    expect(methods.reverseArray([1, 1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1, 1, 1]);
  })

  test("[4] reversed is [4]", () => {
    expect(methods.reverseArray([4])).toStrictEqual([4]);
  })

  test("[] reversed is []", () => {
    expect(methods.reverseArray([])).toStrictEqual([]);
  })
})