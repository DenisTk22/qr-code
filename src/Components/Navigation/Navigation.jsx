import {Link} from "react-router-dom";
import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.container}>
            <Link to='/qr-code/generate'>Генерировать QR код</Link>
            <Link to='/qr-code/scan'>Сканировать QR код</Link>
            <Link to='/qr-code/generateHistory'>История генерирования</Link>
            <Link to='/qr-code/scanHistory'>История сканирования</Link>
        </nav>
    );
};