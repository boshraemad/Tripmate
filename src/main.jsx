import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff'
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
            style:{
              color: 'green',
            }
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: 'red',
              secondary: 'white',
            },
            style:{
              color: 'red',
            }
          },
          loading: {
            duration: 3000,
            iconTheme: {
              primary: '#FF6500',
              secondary: 'white',
            },
            style:{
              color: '#FF6500',
            }
          }
        }}
      />
  </StrictMode>,
)
