import { Routes, Route } from "react-router-dom"
import { QrCodeGenerator } from "./QrCodeGenerator/QrCodeGenerator"
import { QrCodeScanner } from "./QrCodeScanner/QrCodeScanner"
import { Navigation } from "./Navigation/Navigation"
import { GenerateHistory } from "./GenerateHistory"
import { ScanHistory } from "./ScanHistory"

export const Layout = () => {
    return (
        <div>
            <Navigation />
            {/* 
            <QrCodeGenerator/>
            <QrCodeScanner /> */}
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
            </Routes>
        </div>
    )
}