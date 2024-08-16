import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import styles from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        if (!result) return;

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'
        if (prevData.includes(result.text)) return; // если уже есть такой qr, то выходим из функции, больше не сканируем

        setScanned(result.text); // text - берется из свойств QrReader
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text])); // SCAN_DATA - ключ, result[0].rawValue - значение
    };

    return (
        <div className={styles.container}>
            <QrReader
                scanDelay={1000}
                onResult={scanHandler}
                containerStyle={{width: '500px'}}
            />
            <p className={styles.result}>{scanned}</p>    
        </div>
    );
};