import React from 'react';

const Footer = () => {
  return (
  <div className="bg-gray-100">
    <footer className="flex items-center justify-center w-full h-24 border-t">
        <ul>
          <li className="flex items-center justify-center">Rishi Edupalli {new Date().getFullYear().toString()}</li>
          <li className="flex items-center justify-center">We're&nbsp;<a className="font-bold" href="https://github.com/rishiedupalli/oli" target="_blank" rel="noopener noreferrer">open source</a>!</li>
        </ul>
    </footer>
  </div>
  )
};

export default Footer;
