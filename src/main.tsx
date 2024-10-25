import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import FleetContextProvider from './providers/fleet-context-provider.tsx';
import { ThemeProvider } from './providers/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <FleetContextProvider>
        <App />
      </FleetContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
