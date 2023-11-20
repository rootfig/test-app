import { useEffect, useState, RefObject } from 'react';

type OverflowData = {
  isOverflowing: boolean;
};

const useOverflowDetector = (elementRef: RefObject<HTMLElement>): OverflowData => {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (elementRef && elementRef.current) {
        const element = elementRef.current;
        setIsOverflowing(element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef]);

  return { isOverflowing };
};

export default useOverflowDetector;
