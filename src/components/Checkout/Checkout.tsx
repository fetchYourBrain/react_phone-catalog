import { useState, useEffect } from 'react';
import styles from './Checkout.module.scss';
import { FormFields } from '../../types/formFields';
import { InputType } from '../../types/inputTypes';
import { PlaceholderText } from '../../types/placeholder';
import { SuccessMessage } from '../SuccessMessage/SuccessMessage';
import { patterns } from '../../types/patterns';
import { formatCreditCardNumber, formatExpirationDate } from '../../forms/formatInputFields';

const formFieldsData = [
  { id: FormFields.FirstName, type: InputType.Text, placeholder: PlaceholderText.FirstName },
  { id: FormFields.LastName, type: InputType.Text, placeholder: PlaceholderText.LastName },
  { id: FormFields.MobilePhone, type: InputType.Tel, placeholder: PlaceholderText.PhoneNumber, pattern: patterns.phoneNumber },
  { id: FormFields.Address, type: InputType.Text, placeholder: PlaceholderText.Address },
  { id: FormFields.CreditCard, type: InputType.Text, placeholder: PlaceholderText.CreditCard, pattern: patterns.creditCard },
  { id: FormFields.ExpirationDate, type: InputType.Text, placeholder: PlaceholderText.ExpirationDate, pattern: patterns.expirationDate, maxLength: 5 },
  { id: FormFields.CVV, type: InputType.Text, placeholder: PlaceholderText.CVV, pattern: patterns.cvv, maxLength: 3 },
];

export const CheckoutProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    let formattedValue = value;
  
    if (id === FormFields.ExpirationDate) {
      formattedValue = formatExpirationDate(value);
    } else if (id === FormFields.CreditCard) {
      formattedValue = formatCreditCardNumber(value);
    }
  
    setFormValues(prev => ({ ...prev, [id]: formattedValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className={styles.container}>
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
              className={styles.input}
              onChange={handleInputChange}
              value={formValues[id] || ''}
            />
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
                className={styles.input}
                onChange={handleInputChange}
                value={formValues[id] || ''}
              />
            </div>
          ))}
        </div>
        <button type="submit" className={styles.button}>Checkout</button>
      </form>

      {isModalOpen && <SuccessMessage onClose={handleModalClose} />}
    </div>
  );
};