import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [sometext, setSometext] = useState(false);
  const napis_3 =
    "Hi Konstantin! Wszystkiego najlepszego z okazji dnia mężczyzn! Żebyś każdego dnia znalazł powód do uśmiechu, dni pełnych miłości i spełnienia najskrytszych marzeń! ";
  const [counter, setCounter] = useState(0);
  const foo = () => {
    if (counter >= napis_3.length) {
      return;
    } else {
      setCounter((prev) => prev + 1);
      setTimeout(foo, 100);
    }
  };

  const magicfoo = () => {
    setSometext((prev) => !prev);
  };

  useEffect(() => {
    if (!sometext) {
      foo();
    } else {
      setCounter(0);
    }
    // eslint-disable-next-line
  }, [sometext]);

  return (
    <div>
      {sometext ? (
        <div className="cont">
          <div className="napis2">{napis_3.slice(0, counter)}</div>
        </div>
      ) : (
        <div className="napis">Pet the frog! </div>
      )}

      <div class="container" onClick={magicfoo}>
        <div class="leg-l"></div>
        <div class="leg-r"></div>
        <div class="body"></div>
        <div class="face">
          <div class="eyes"></div>
          <div class="tongue"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
