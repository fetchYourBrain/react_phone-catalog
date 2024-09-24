import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './CardSkelton.module.scss';


export const CardSkeleton: React.FC = () => {
  const baseColor = '#0F1121';
  const highlightColor = '#4A4D58';

  return (
    <div className={styles.skeleton}>
      <div className={styles.image}>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={160}
          width={'100%'}
        />
      </div>
      
      <div className={styles.title}>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={20}
          width={'100%'}
        />
      </div>

      <div className={styles.price}>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={24}
          width={'60%'}
        />
      </div>

      <div className={styles.line}>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={2}
          width={'100%'}
        />
      </div>

      <div className={styles.specifications}>
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            baseColor={baseColor}
            highlightColor={highlightColor}
            height={15}
            width={'100%'}
          />
        ))}
      </div>

      <div className={styles.buttons}>
        <Skeleton
          baseColor={baseColor}
          highlightColor={highlightColor}
          height={40}
          width={'100%'}
        />
      </div>
    </div>
  );
};