import { useState, useEffect } from 'react';
import { SuccessMessage } from '../SuccessMessage/SuccessMessage';
import { useFormHandling } from '../../forms/useFormHandling';
import { formFieldsData } from '../../forms/formFields';
import styles from './Checkout.module.scss';
import closeButton from '../../../public/img/icons/close-button-icon.svg';

interface CheckoutProcessProps {
  onClose: () => void;
}

export const CheckoutProcess: React.FC<CheckoutProcessProps> = ({ onClose }) => {
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(true);

  const {
    formValues,
    formErrors,
    handleInputChange,
    handleInputBlur,
    validateFieldsOnSubmit
  } = useFormHandling();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFieldsOnSubmit()) {
      return;
    }

    setIsCheckoutVisible(false);

    setTimeout(() => {
      setIsSuccessMessageOpen(true);
    }, 1000);
  };

  const handleModalClose = () => {
    setIsSuccessMessageOpen(false);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = isSuccessMessageOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSuccessMessageOpen]);

  if (!isCheckoutVisible) {
    return isSuccessMessageOpen ? <SuccessMessage onCloseMessage={handleModalClose} /> : null;
  }

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={onClose}>
        <img src={closeButton} className={styles.closeImage} alt="Close modal" />
      </button>
      <h1 className={styles.title}>Payment & Delivery</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {formFieldsData.slice(0, 5).map(({ id, type, placeholder, pattern }) => (
          <div key={id} className={styles.inputGroup}>
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              required
              pattern={pattern}
              className={`${styles.input} ${formErrors[id] ? styles.errorInput : ''}`}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              value={formValues[id] || ''}
            />
            {formErrors[id] && <span className={styles.errorText}>{formErrors[id]}</span>}
          </div>
        ))}
        <div className={styles.row}>
          {formFieldsData.slice(5).map(({ id, type, placeholder, pattern, maxLength }) => (
            <div key={id} className={styles.group}>
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                required
                pattern={pattern}
                maxLength={maxLength}
                className={`${styles.input} ${formErrors[id] ? styles.errorInput : ''}`}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                value={formValues[id] || ''}
              />
              {formErrors[id] && <span className={styles.errorText}>{formErrors[id]}</span>}
            </div>
          ))}
        </div>
        <button type="submit" className={styles.button}>Complete Purchase</button>
      </form>

      {isSuccessMessageOpen && <SuccessMessage onCloseMessage={handleModalClose} />}
    </div>
  );
};