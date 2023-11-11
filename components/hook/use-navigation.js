"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isBlogActive, setIsBlogActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const [isBookActive, setIsBookActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsAboutActive(false);
    setIsBlogActive(false);
    setIsProjectActive(false);
    setIsBookActive(false);

    switch (pathname) {
      case "/":
        setIsHomeActive(true);
        break;
      case "/about":
        setIsAboutActive(true);
        break;
      case "/blog":
        setIsBlogActive(true);
        break;
      case "/projects":
        setIsProjectActive(true);
        break;
      case "/notes":
        setIsBookActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isAboutActive,
    isBlogActive,
    isProjectActive,
    isBookActive,
  };
};

export default useNavigation;
