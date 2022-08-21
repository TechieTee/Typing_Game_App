import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import { ChallengeDetailsCard } from './../ChallengeDetailsCard/ChallengeDetailsCard'
import styles from './TypingChallengeContainer.module.css'

export const TypingChallengeContainer = ({ 
    handleKeyPress,
    timeRemaining,
    words,
    characters,
    mistakes,
    timerStarted,
    selectedParagraph
}) => {
    return (
        <div className={styles.typingChallengeContainer}>
            <div className={styles.detailsContainer}>
                {/* Words Typed */}
                <ChallengeDetailsCard
                    cardName="Words"
                    cardValue={words}
                />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />

                {/* Mistakes */}
                <ChallengeDetailsCard
                    cardName="Mistakes"
                    cardValue={mistakes}
                />
            </div>

            {/* Typing Challenge */}
            <div className={styles.typeChallengeCont}>
                <TypingChallenge
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    handleKeyPress={handleKeyPress}
                    selectedParagraph={selectedParagraph}
                />
            </div>
        </div>
    )
}