import { useEffect, MutableRefObject } from "react";

export const useOutsideClickHook = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | ToggleEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };

    document.addEventListener("mousedown", listener as EventListener);
    document.addEventListener("touchstart", listener as EventListener);

    return () => {
      document.removeEventListener("mousedown", listener as EventListener);
      document.removeEventListener("touchstart", listener as EventListener);
    };
  }, [ref, callback]);
};
