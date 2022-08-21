import styles from './ChallengeDetailsCard.module.css'
export const ChallengeDetailsCard = ({ cardName, cardValue }) => {
  return (
    <div className={styles.detailsCardContainer}>
      <p className={styles.cardName}>{cardName}</p>
        <p className={styles.cardValue}>{cardValue}</p>
    </div>
  );
};
