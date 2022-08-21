import { useState, useEffect } from "react";
import styles from "./TypingApp.module.css";
import { TestContainer } from "../TestContainer/TestContainer";

import { typingTestData } from "../../data/source";
import { randomElementSelector } from "../../helper/randomSelector";

import { testDetailsCalculator } from "../../helper/testDetailsCalculator";



const app = () => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [detailsData, setDetailsData] = useState({
    words: 0,
    characters: 0,
    mistakes: 0,
  });
  const [selectedParagraph, setSelectedParagraph] = useState('');
  


  useEffect(() => {
   setSelectedParagraph(randomElementSelector(typingTestData))
  }, []);

  const handleKeyPress = (inputValue) => {
    if (!timerStarted) startTimer();
    const updatedDetails = testDetailsCalculator(
      selectedParagraph,
      inputValue
    );

   setDetailsData(updatedDetails)
  };

  const startAgain = () =>
  setSelectedParagraph(randomElementSelector(typingTestData))

  const startTimer = () => {
    setTimerStarted(true)
    const timer = setInterval(() => {
      if (timeRemaining > 0) {

        setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1)
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.mainHeading}>Accurate Speedy</h1>
      <span className={styles.mainHeadingTips}>
        hey there! do test for either of spead and then accuracy before trying
        to perfect both, you can do this!
      </span>
      <div className={styles.testMontainerMain}>
        <TestContainer
          handleKeyPress={handleKeyPress}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          startAgain={startAgain}
          words={detailsData.words}
          characters={detailsData.characters}
          mistakes={detailsData.mistakes}
          selectedParagraph={selectedParagraph}
        />
      </div>
    </div>
  );
};

export default app;
