import { useEffect, useState } from "react";

const useScreenSize = (): { width: number } => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(document.body);
  }, []);

  return { width };
};

export default useScreenSize;
