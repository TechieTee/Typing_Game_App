import styles from "./TypingChallenge.module.css";

export const TypingChallenge = ({
  handleKeyPress,
  timeRemaining,
  timerStarted,
  selectedParagraph,
}) => {
  return (
    <div className={styles.typingChallenge}>
      <div className={styles.timerContainer}>
        <p className={styles.timer}>
          00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className={styles.timerInfo}>
          {!timerStarted && "Start typing to start the test"}
        </p>
      </div>

      <div className={styles.textareaContainer}>
        <div className={styles.textareaLeft}>
          <textarea
            disabled={true}
            className={styles.textarea}
            value={selectedParagraph}
          ></textarea>
        </div>
        <div className={styles.textareaRight}>
          <textarea
            onChange={(e) => handleKeyPress(e.target.value)}
            className={styles.textarea}
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
