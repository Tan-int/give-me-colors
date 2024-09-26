import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ReactNode, useState, Children, Fragment } from 'react';

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
    <div className="flex flex-row items-center">
      <button onClick={previousSlide}>
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="mx-2 flex flex-row items-center gap-x-1">
        {childrenArray
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((child, index) => (
            <Fragment key={index}>{child}</Fragment>
          ))}
      </div>
      <button onClick={nextSlide}>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
