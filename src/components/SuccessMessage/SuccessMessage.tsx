import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './SuccessMessage.module.scss';
import { RoutesLink } from '../../types/routes';
import checkCircle from '../../../public/animations/success-message.json';

interface SuccessMessageProps {
  onCloseMessage: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onCloseMessage }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onCloseMessage(); 
    navigate(RoutesLink.PhonesPage);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.animation}>
          <Lottie animationData={checkCircle} className={styles.checkAnimation}/>
        </div>
        <h2 className={styles.title}>Your order is confirmed!</h2>
        <p className={styles.description}>Your order has been successfully processed.</p>
        <button onClick={handleButtonClick} className={styles.button}>
          Continue shopping
        </button>
      </div>
    </div>
  );
};