import { TypingChallengeContainer } from '../TypingChallengeContainer/TypingChallengeContainer'
import { TryAgain } from './../TryAgain/TryAgain'
import styles from './TestContainer.module.css'

export const TestContainer = ({ 
    handleKeyPress,
    timeRemaining,
    startAgain,
    words,
    characters,
    mistakes,
    timerStarted,
    selectedParagraph
}) => {
    return (
        <div className={styles.testContainer}>
            {/* Show the try again or start screen */}
            {
                timeRemaining > 0
                    ? <div className={styles.typingChallengeCont}>
                        <TypingChallengeContainer
                            handleKeyPress={handleKeyPress}
                            timeRemaining={timeRemaining}
                            words={words}
                            characters={characters}
                            mistakes={mistakes}
                            timerStarted={timerStarted}
                            selectedParagraph={selectedParagraph}
                        />
                    </div>
                    : <div className={styles.tryAgainCont}>
                        <TryAgain 
                            startAgain={startAgain} 
                            words={words}
                            characters={characters}
                            mistakes={mistakes}
                        />
                    </div>
            }            
        </div>
    )
}