import React, { useState } from "react";
import styles from "./Sort.module.scss";
import arrow from "../../../public/img/icons/arrow.svg";

type Option = {
  value: string | number;
  label: string;
};

interface SortProps {
  options: Option[];
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  title: string;
  selectedValue: string | number;
}

export const Sort: React.FC<SortProps> = ({ options, onChange, title,selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleOptionClick = (obj: Option) => {
    onChange(String(obj.value));
    setIsOpen(false);
  };


  return (
    <div className={styles.block}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        <div
          className={`${styles.trigger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedValue}</span>
          <img
            src={arrow}
            alt="Arrow"
            className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
          />
        </div>
        {isOpen && (
          <ul className={styles.menu}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.item}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
