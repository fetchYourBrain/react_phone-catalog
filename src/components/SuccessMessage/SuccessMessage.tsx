import styles from './SuccessMessage.module.scss';
import closeButton from '../../../public/img/icons/close-button-icon.svg';
import chekhCircle from '../../../public/img/icons/check-circle-icon.svg';

interface SuccessMessageProps {
  onClose: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.closeButton}>
          <img src={closeButton} className={styles.closeImage} alt="Close modal" />
        </button>
        <div className={styles.modalImage}>
          <img src={chekhCircle} className={styles.checkImage} alt="Confirmation" />
        </div>
        <h2 className={styles.title}>Your order is confirmed!</h2>
        <p className={styles.description}>Your order has been successfully processed.</p>
        <button onClick={onClose} className={styles.button}>
          Continue shopping
        </button>
      </div>
    </div>
  );
};