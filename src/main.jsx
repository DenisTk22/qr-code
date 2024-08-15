import React from 'react'
import { createRoot} from 'react-dom/client'
import { createBrowserRouter, BrowserRouter } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { QrCodeGenerator } from "./Components/QrCodeGenerator/QrCodeGenerator"
import { QrCodeScanner } from "./Components/QrCodeScanner/QrCodeScanner"

const router = createBrowserRouter([
  {
    path: "/", // обозначение пути для элемента
    element: <Layout />// сам элемент
  },
  {
    path: "/generate", // обозначение пути для элемента
    element: <QrCodeGenerator /> // сам элемент
  },
  {
    path: "/scan", // обозначение пути для элемента
    element: <QrCodeScanner /> // сам элемент
  },
])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
