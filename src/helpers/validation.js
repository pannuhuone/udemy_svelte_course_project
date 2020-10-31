export function isEmpty(val) {
  return val.trim().length === 0;
}

export function isValidEmail(val) {
  // return val.includes('@');
  return new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$").test(val);
}