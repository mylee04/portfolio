// Polyfill localStorage for SSR when Node.js has malformed localStorage
// This runs before any other code during Next.js initialization
export async function register() {
  if (typeof window === "undefined") {
    const storage: Record<string, string> = {};
    (globalThis as any).localStorage = {
      getItem: (key: string) => storage[key] ?? null,
      setItem: (key: string, value: string) => { storage[key] = value; },
      removeItem: (key: string) => { delete storage[key]; },
      clear: () => { Object.keys(storage).forEach(k => delete storage[k]); },
      key: (i: number) => Object.keys(storage)[i] ?? null,
      get length() { return Object.keys(storage).length; },
    };
  }
}
