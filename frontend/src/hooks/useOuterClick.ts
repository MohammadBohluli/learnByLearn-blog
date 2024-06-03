import { useRef, useEffect } from "react";

type HandlerClick = () => void;

const useOuterClick = (handlerClick: HandlerClick) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handlerClick();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [handlerClick]);
  return { ref };
};

export default useOuterClick;
