export default function useCacheStorage() {
  const store = 'social-network'
  async function get(tag: string) {
    return caches
      .open(store)
      .then((cache) => cache.match(tag))
      .then((res) => res?.json())
  }
  async function save(tag: string, data: Response) {
    return caches.open(store).then((cache) => cache.put(tag, data))
  }

  return { get, save }
}
