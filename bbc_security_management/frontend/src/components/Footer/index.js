import React from 'react';
import styles from './styles.scss';


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Support</li>
                    <li className={styles.listItem}>KISA</li>
                    <li className={styles.listItem}>GITHUB</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>2018 BONGBONGCO</span>
        </div>
    </footer>
);

export default Footer;