import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import styles from './GenerateHistory.module.css';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'

    return (
        <div>
            {data.map((text) => (
                <p className={styles.qrcode} key={text}>
                    <QRCodeSVG value={text} size={70} />
                    {text}
                </p>
            ))}
        </div>
    )
}