import { useState, useRef, useEffect } from "react";

export function useInViewport() {
  const ref = useRef();
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [isOnScreen, ref];
}
