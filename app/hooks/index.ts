import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  ref: RefObject<any>,
  options: {
    onIntersect?: (entry: IntersectionObserverEntry) => void;
  } & IntersectionObserverInit
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      options?.onIntersect?.(entry);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
