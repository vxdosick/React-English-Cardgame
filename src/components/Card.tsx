import { useState } from "react";

type Props = {
    word: string;
    translate: string;
}
function Card({word, translate}: Props) {
  const [showTranslate, setShowTranslate] = useState(false);
  return (
    <div className="card__container flex gap-5 flex-col items-center">
      <div className="card flex flex-col justify-center items-center gap-5 h-[200px] w-[300px] rounded-[20px] px-4 py-2 text-white">
        <h2 className="text-2xl font-bold">{word}</h2>
        {showTranslate && <h3 className="text-lg">{translate}</h3>}
        <button onClick={() => setShowTranslate(!showTranslate)}>
          Show translation
        </button>
      </div>
    </div>
  );
}

export default Card;
