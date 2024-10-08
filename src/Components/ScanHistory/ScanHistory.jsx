import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory = () => {

    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'
    return (
        <div>
            {data.map((text) => (
                <p className={styles.qrcode} key={text}>
                    {text}
                    <QRCodeSVG value={text} size={100} />
                </p>
            ))}
        </div>
    )
}