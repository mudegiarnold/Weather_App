declare module 'jotai' {
    export function atom<T>(initialValue: T): [() => T, (newValue: T) => void];
    // Add more declarations as needed based on your usage of jotai
  }
  