import styles from './Footer.module.scss';
import logo from '../../../public/img/icons/nice-gadgets-logo.png';

export const Footer = () => {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <a className={styles.logoLink}>
                        <img src={logo} alt="The logo of Nice Gadgets" />
                    </a>
                </div>
                <nav className={styles.navigation}>
                    <a href="https://github.com/fetchYourBrain/react_phone-catalog" target="_blank">
                    Github
                    </a>
                    <a href="#">Contacts</a>
                    <a href="#">Rights</a>
                </nav>
                <div className={styles['backToTop']}>
                    <p className={styles['backToTopTittle']}>Back to top</p>
                    <button className={styles['backToTopBtn']} onClick={handleBackToTop}>↑</button>
                </div>
            </div>
      </footer>
    );
}