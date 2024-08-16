import {Link} from "react-router-dom";
import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.container}>
            <Link className={styles.link} to='/qr-code/generate'>Create QRcode</Link>
            <Link className={styles.link} to='/qr-code/scan'>Scan QRcode</Link>
            <Link className={styles.link} to='/qr-code/generateHistory'>Created QRcode</Link>
            <Link className={styles.link} to='/qr-code/scanHistory'>Scanned QRcode</Link>
        </nav>
    );
};