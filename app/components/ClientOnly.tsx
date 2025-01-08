import { PropsWithChildren, ReactNode, useSyncExternalStore } from "react";

type Props = PropsWithChildren<{
  fallback?: ReactNode;
}>;
export function ClientOnly({ children, fallback = null }: Props) {
  return useHydrated() ? <>{children}</> : <>{fallback}</>;
}

function subscribe() {
  return () => {};
}
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
