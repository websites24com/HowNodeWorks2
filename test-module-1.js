// I

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     return a / b;
//   }
//
//   deduction(a, b) {
//     return a - b;
//   }
// }
//
// module.exports = Calculator;

// II

module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }

  deduction(a, b) {
    return a - b;
  }
};
