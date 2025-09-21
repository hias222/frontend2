import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WsConnect from './pages/WsConnect';
import Resultlists from './pages/resultlists';
import StartLists from './pages/startlist';
import History from './pages/history';
import Heats from './pages/heats';
import Downloads from './pages/downloads';
import { Container } from '@mui/material';
import Info from './pages/info';
import StartPage from './pages/startPage';
import Live from './pages/live';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend" >
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/live/:base" element={<Live />} />
          <Route path="/results/:base" element={<Resultlists />} />
          <Route path="/lists/:base" element={<StartLists />} />
          <Route path="/history/:base" element={<History />} />
          <Route path="/heats" element={<Heats />} />
          <Route path="/info/:base" element={<Info />} />
          <Route path="/downloads/:base" element={<Downloads />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const VERSION_CHECK_INTERVAL = 60000; // 1 minute

async function checkVersion() {
  try {
    const res = await fetch('/frontend/meta.json', { cache: 'no-store' });
    const { version } = await res.json();
    const currentVersion = localStorage.getItem('app_version');
    if (currentVersion && currentVersion !== version) {
      window.location.reload();
    }
    localStorage.setItem('app_version', version);
  } catch (e) {
    // ignore errors
  }
}

setInterval(checkVersion, VERSION_CHECK_INTERVAL);
checkVersion();