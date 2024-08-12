'use client'

import { Inter } from 'next/font/google'
import './ui/styles/globals.css'
import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import MobileMenu from './ui/components/MobileMenu'
import { useState } from 'react'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Telemedicina',
//   description: 'App de Telemedicina',
// }

export default function RootLayout({ children }) {

  const [hiddenClass, setHiddenClass] = useState("hidden");

    const handleHidden = () => setHiddenClass("");

    const handleRemove = () => {
        if (hiddenClass === "") {
            setHiddenClass("hidden");
        }
    };

  return (
    <html lang="es">

      <body className={inter.className}>
        <Header handleHidden={handleHidden} />
        <MobileMenu
          hiddenClass={hiddenClass}
          handleRemove={handleRemove}
        />
          {children}
        <Footer/>
      </body>    
    </html>
  )
}
