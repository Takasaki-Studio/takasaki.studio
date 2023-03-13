import { useEffect, useState } from "react";

export const useWindowHeight = () => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
