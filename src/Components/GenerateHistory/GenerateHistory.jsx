import { GENERATE_DATA } from '../../constants';
import { QrReader } from 'react-qr-reader';
import styles from './GenerateHistory.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'

    return (
        <div>
            {data.map((text) => (
                <p className={styles.qrcode} key={text}>
                    <QrReader value={text} size={70} />
                    {text}
                </p>
            ))}
        </div>
    )
}