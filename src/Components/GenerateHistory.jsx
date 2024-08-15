import { GENERATE_DATA } from '../constants';
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'); // получение предыдущих значений или пустого [] если еще ничего нет, JSON.parse конвертирует в массив, пустой массив нужно обернуть в строку '[]'

    return (
        <div>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG value={text} size={100} />
                </p>
            ))}
        </div>
    )
}