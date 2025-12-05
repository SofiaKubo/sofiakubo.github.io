import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="app-text">
          Привет! Меня зовут Соня. У меня уже есть опыт работы с HTML, CSS, JavaScript и Git. Раньше я изучала Java, а
          сейчас хочу углубиться в React, современный фронтенд-стек и работу с API. Мои цели на курсе — научиться
          профессионально разрабатывать веб-приложения, понимать архитектуру React-приложений, применять TypeScript на
          практике и работать с реальными проектами.
          <br />
          <br />
          В дальнейшем я хочу совмещать фронтенд и бэкенд-разработку, создавая полноценные веб-приложения.
          <br />
          <br />
          Мой GitHub:{' '}
          <a href="https://github.com/SofiaKubo" target="_blank" rel="noreferrer">
            github.com/SofiaKubo
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
