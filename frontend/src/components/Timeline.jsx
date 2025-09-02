import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Timeline.module.css';
import timelineData from '../data/timeline';

// A sub-component for each individual timeline event
const TimelineItem = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the item is visible
  });

  // Alternate items left and right
  const itemClasses = `${styles.timelineItem} ${
    index % 2 === 0 ? styles.left : styles.right
  } ${inView ? styles.visible : ''}`;

  return (
    <div ref={ref} className={itemClasses}>
      <div className={styles.timelineDot}></div>
      <div className={styles.timelineDate}>{item.year}</div>
      <div className={styles.timelineContent}>
        <h3>{item.title}</h3>
        <h4>{item.duration}</h4>
        <p>{item.details}</p>
      </div>
    </div>
  );
};

// The main component that renders the whole timeline
const Timeline = () => {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>My Journey</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <TimelineItem item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;