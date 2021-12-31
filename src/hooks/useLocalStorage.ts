export default class useLocalStorage {
  static get(tag: string) {
    return JSON.parse(localStorage.getItem(tag) || '')
  }
  static set(tag: string, data: object) {
    localStorage.removeItem(tag)
    localStorage.setItem(tag, JSON.stringify(data))
  }
  static remove(tag: string) {
    localStorage.removeItem(tag)
  }
  static clear() {
    localStorage.clear()
  }
}
