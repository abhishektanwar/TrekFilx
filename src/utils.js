const utils = {
  setLocalStorage: (key, data) => localStorage.setItem(key, data),
  getLocalStorage: (key) => localStorage.getItem(key),
  removeLocalStorage: (key) => localStorage.removeItem(key),
}
export default utils;