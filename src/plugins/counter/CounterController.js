// Plain Javascript no redux dependencies - easy to test and less
// understanding necesarry to change the logic.

export function incrementByAmount(value, amount) {
  return value + amount;
}

export function decrementByAmount(value, amount) {
  return value - amount;
}

export function increment(value) {
  return incrementByAmount(value, 1);
}

export function decrement(value) {
  return decrementByAmount(value, 1);
}
