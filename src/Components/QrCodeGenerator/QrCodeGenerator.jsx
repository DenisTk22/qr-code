import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants';


export const QrCodeGenerator = () => {
    const [value, setValue] = useState('') // хранилище хранит, обновляет и перерисовывает
    const [result, setResult] = useState(false)

    // const array = useState('hello');
    // const value = array[0];
    // const setValue = array[1];

    // const isShowQRCode = false;

    const onClickHandler = () => {

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value])) // SCAN_DATA - ключ, result[0].rawValue - значение

        setResult(value);
        setValue(''); // чистим поле ввода
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        // array[1](event.target.value);
        setResult(''); // скрываем qr code при вводе
    }

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={value} 
                placeholder='Введите текст...'
                onChange={onChangeHandler} 
                className='input'
            />
            <button 
                type="button" 
                onClick={onClickHandler}
                className={styles.button}
            >
                    Сгенерировать QR code
            </button>
            {/* {isShowQRCode === true ? <QRCodeSVG value={value} /> : null}  или:*/}
            {/* {isShowQRCode ? <QRCodeSVG value={value} /> : null} или: */}
            {result !== '' && (
                <div className={styles.qrWrapper}>
                    <QRCodeSVG value={result} size={200}/>
                </div>
            )}
            {/* <QRCodeSVG value={value} /> */}
        </div>
    );
};