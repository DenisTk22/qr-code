import { Routes, Route } from "react-router-dom"
import { QrCodeGenerator } from "./QrCodeGenerator/QrCodeGenerator"
import { QrCodeScanner } from "./QrCodeScanner/QrCodeScanner"
import { Navigation } from "./Navigation/Navigation"
import { GenerateHistory } from "./GenerateHistory/GenerateHistory"
import { ScanHistory } from "./ScanHistory/ScanHistory"

export const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
                <Route path="/qr-code/scan" element={<QrCodeScanner />} />
                <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
                <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    )
}