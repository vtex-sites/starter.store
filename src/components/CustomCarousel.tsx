import { useEffect, useRef, useState } from "react";
import { Carousel as UICarousel } from "@faststore/ui";
import type { CarouselProps as UICarouselProps } from "@faststore/ui";

export default function CustomCarousel(props: UICarouselProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const ref = useRef<any>(null);
  const tabletWidth = 768;
  const notebookWidth = 1024;

  const updateItemsPerPage = () => {
    if (screenWidth) {
      if (screenWidth <= tabletWidth) {
        return 2.1;
      } else if (screenWidth > tabletWidth && screenWidth <= notebookWidth) {
        return 3;
      } else {
        return 5;
      }
    }
  };

  useEffect(() => {
    if (ref?.current) {
      setScreenWidth(ref.current.offsetWidth);
    }
  }, [ref]);

  return (
    <section ref={ref}>
      <UICarousel {...props} itemsPerPage={updateItemsPerPage()}></UICarousel>
    </section>
  );
}
