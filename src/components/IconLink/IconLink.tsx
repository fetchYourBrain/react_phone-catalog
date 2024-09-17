import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IconLink.module.scss';

interface Props {
  to: string;
  iconSrc: string;
  alt: string;
  className?: string;
}

export const IconLink: React.FC<Props> = ({ to, iconSrc, alt, className }) => (
  <Link to={to} className={`${styles.iconLink} ${className || ''}`}>
    <div className={styles.iconWrapper} style={{ backgroundImage: `url(${iconSrc})` }} aria-label={alt} />
  </Link>
);
