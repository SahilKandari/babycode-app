import React from 'react'
import styles from './premiumCard.module.css'
import { IconCircleCheck,IconCircleArrowRight } from '@tabler/icons-react';

const PremiumCard = ({ className }) => {
  const classes = `${styles.container} ${className}`;
  return (
    <div className={classes}>
      <h3 className={styles.title}>Explore premium features with ease!</h3>
      <div className={styles.checklists}>
        <div className={styles.checklist}>
          <IconCircleCheck/>
          <p>Unlimited Speaking Test</p>
        </div>
        <div className={styles.checklist}>
          <IconCircleCheck/>
          <p>Unlimited Writing Test</p>
        </div>
        <div className={styles.checklist}>
          <IconCircleCheck/>
          <p>Analyze Your Answer</p>
        </div>
        <div className={styles.checklist}>
          <IconCircleCheck/>
          <p>Check Band Score</p>
        </div>
      </div>
      <div className={styles.pricing}>
        <h6>Only @ &#8377; 299</h6>
        <button>Buy Now <IconCircleArrowRight/></button>
      </div>
    </div>
  )
}

export default PremiumCard
