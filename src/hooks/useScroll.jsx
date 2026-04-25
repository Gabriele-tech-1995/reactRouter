import { useEffect, useRef } from "react";

function useScroll() {
  const elementRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!elementRef.current) return;

      if (window.scrollY > 50) {
        elementRef.current.classList.add("navbar-scrolled");
      } else {
        elementRef.current.classList.remove("navbar-scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return elementRef;
}

export default useScroll;
