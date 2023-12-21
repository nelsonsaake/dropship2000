"use client";

import { useState, useEffect } from "react";

export const useDeviceWidth = () => {
  const mobileSmall = 320;
  const mobileMedium = 375;
  const mobileLarge = 425;
  const tablet = 768;
  const laptop = 1024;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window?.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return {
    width,
    isMobileSmall: width <= mobileSmall,
    isMobileMedium: width > mobileSmall,
    isMobileLarge: width > mobileMedium,
    isTablet: width > mobileLarge,
    isLaptop: width > tablet,
    isLaptopMedium: width > laptop,
  };
};
