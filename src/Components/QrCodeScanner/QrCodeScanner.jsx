import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import styles from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'

        localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue])) // SCAN_DATA - ключ, result[0].rawValue - значение
    }

    const settings = {
        audio: false,
        // finder: false
    }

    const styleSettings = {
        container: { width: 350}
    }


    return (
        <div className={styles.container}>
            <Scanner 
                // allowMultiple={true} // сканировать одно и тоже подряд
                onScan={scanHandler} 
                components={settings} 
                styles={styleSettings} />
            <p className={styles.result}>{scanned}</p>    
        </div>
    )
}