import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Content from './Content';
import Header from './Header';
import { store } from '../store';
import Registartion from "./Registartion";

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {

      return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Content />} />
            <Route exact path='/registration' element={<Registartion />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  );
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);