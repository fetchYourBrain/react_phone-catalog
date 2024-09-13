import styles from './NotFound.module.scss';
import page_not_found from '../../../public/img/page-not-found.png';
import { Link } from 'react-router-dom';

export const NotFound: React.FC  = () => {
  return (
    <div className={styles.not_found}>
      <img
        src={page_not_found}
        alt="Page Not Found"
        className={styles.image}
      />
      <h2 className={styles.title}>Oops! Page Not Found</h2>
      <p className={styles.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={styles.go_back}>
        Go Back Home
      </Link>
    </div>
  );
} 