import words from "@/words/words";
import Card from "@/components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";

function App() {
  const sliderRef = useRef<Slider>(null);

  const totalSlides = words.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const finishedLevel = () => {
    sliderRef.current?.slickGoTo(0);
    setFinished(false);
    setCurrentSlide(0);
  }

  // const handlePrev = () => {
  //   sliderRef.current?.slickPrev();
  // };

  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    draggable: false,
    arrows: false,
    accessibility: false,
    afterChange: (index: number) => {
    setCurrentSlide(index);
    if (index === totalSlides - 1) {
      setFinished(true);
    } else {
      setFinished(false);
    }
  }
  };
  return (
    <div className="main flex flex-col h-screen items-center">
      <main className="py-[50px] flex flex-col items-center gap-5">
        <Slider
          ref={sliderRef}
          {...settings}
          className="max-w-[400px]"
        >
          {words.map((word, index) => {
            return (
              <Card
                key={index}
                word={word.word}
                translate={word.translate}
              ></Card>
            );
          })}
        </Slider>
        {!finished && (
          <div className="flex gap-5 items-center">
          <button onClick={handleNext} className="button--secondary">To learn</button>
          <button onClick={handleNext} className="button--general">I know</button>
        </div>
        )}
        {finished && (
          <button onClick={finishedLevel} className="button--general">Finish</button>
        )}
      </main>
      <footer className="py-3.5 border-t border-gray-600">
        <div className="flex flex-col items-center">
          <a className="logo" href="/">
            vxdosick
          </a>
          <p>Strength in consistency</p>
          <p>
            &copy; {new Date().getFullYear() > 2025 ? "2025 - " : ""}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
export default App;
