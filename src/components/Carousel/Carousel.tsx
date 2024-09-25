import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { ReactNode, useState, Children } from 'react';

type CarouselProps = {
  children: ReactNode;
  itemsToShow: number;
};
export default function Carousel({ children, itemsToShow }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = Children.toArray(children);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + itemsToShow;
      return newIndex >= childrenArray.length ? prevIndex : newIndex;
    });
  };

  const previousSlide = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - itemsToShow;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  return (
    <div className="flex flex-row items-center gap-x-4">
      <button onClick={previousSlide}>
        <CircleArrowLeft />
      </button>
      {childrenArray
        .slice(currentIndex, currentIndex + itemsToShow)
        .map((child, index) => (
          <div key={index} className="flex flex-col items-center">
            {child}
          </div>
        ))}
      <button onClick={nextSlide}>
        <CircleArrowRight />
      </button>
    </div>
  );
}
