import React, { useState } from 'react';
import styles from './Sort.module.scss';
import arrow from '../../../public/img/icons/arrow.svg';

type Option = {
  value: string;
  label: string;
};

interface SortProps {
  options: Option[];
  selectedValue: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

export const Sort: React.FC<SortProps> = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{options.find(option => option.value === selectedValue)?.label || 'Select an option'}</span>
        <img
          src={arrow}
          alt="Arrow"
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
        />
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map(option => (
            <li
              key={option.value}
              className={styles.item}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};