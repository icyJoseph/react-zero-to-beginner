import { useCallback, useRef, useSyncExternalStore } from "react";

export function useMouseXY() {
  const xy = useRef({
    x: 0,
    y: 0,
  });

  const subscribe = useCallback((callback: VoidFunction) => {
    function handleMouseMove(event: MouseEvent) {
      xy.current = {
        x: event.clientX,
        y: event.clientY,
      };

      callback();
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return useSyncExternalStore(subscribe, () => xy.current);
}
