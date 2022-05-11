import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Raffle from './pages/Raffle';
import Setting from './pages/Setting';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Setting />} />
          <Route path="/raffle" element={<Raffle />} />
        </Routes>
        <GlobalStyle />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
