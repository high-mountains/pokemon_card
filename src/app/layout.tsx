'use client'

import { Provider } from 'react-redux'; 
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