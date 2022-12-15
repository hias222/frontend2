import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './pages/Header';
import WsConnect from './pages/WsConnect';
import Resultlists from './pages/resultlists';
import History from './pages/history';
import Heats from './pages/heats';
import Downloads from './pages/downloads';
import { Container } from '@mui/material';
import Info from './pages/info';
import Footer from './pages/Footer';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend">
      <Container maxWidth="md">
        <Header />
        <Routes>
          <Route path="/" element={<Resultlists />} />
          <Route path="/live" element={<WsConnect />} />
          <Route path="/lists" element={<Resultlists />} />
          <Route path="/history" element={<History />} />
          <Route path="/heats" element={<Heats />} />
          <Route path="/info" element={<Info />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
