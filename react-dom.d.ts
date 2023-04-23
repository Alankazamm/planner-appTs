declare module 'react-dom' {
    export function createRoot(container: Element | Document | ShadowRoot | DocumentFragment, options?: { hydrate?: boolean }): { render: (reactNode: React.ReactNode) => void };
  }