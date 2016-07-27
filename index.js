function countdown(callback) {
  setTimeout(callback, 2000)
}

function createMultiplier(mult) {
  return function(num) { return mult * num };
}

function multiplier(arg1, arg2) {
  return arg1 * arg2
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(undefined, 2);
var triplerWithBind = multiplier.bind(undefined, 3);