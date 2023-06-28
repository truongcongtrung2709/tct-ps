import React from 'react'
import ReactDOM from 'react-dom/client'
import'./index.css'
import { ThemeProvider } from "@material-tailwind/react";

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <ThemeProvider>
      <App />
    </ThemeProvider>
)
