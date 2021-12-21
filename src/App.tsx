import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="flex justify-center w-1/2 h-64 bg-purple">
        <div>
          <div className="text-8xl font-rammetto content-center text-yellow content-center">
            WATAKUMI
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
