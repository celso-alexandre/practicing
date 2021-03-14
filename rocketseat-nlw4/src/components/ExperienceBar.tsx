import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const toNextLevelPercentage = Math.round((currentExperience / experienceToNextLevel) * 100);

  return (
    <header className={styles.experienceBar}>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
      <div>
        <div style={{ width: `${toNextLevelPercentage}%` }} />

        <span className={styles.currentExperience} style={{ left: `${toNextLevelPercentage}%` }}>
          {currentExperience}
          xp
        </span>
      </div>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
    </header>
  );
}
