'use client'
import type { Metadata } from "next";

import { Provider } from 'react-redux'; // Import the Provider
import { store } from '@/store/store';
import "./globals.css";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
    </Provider>
  )
}