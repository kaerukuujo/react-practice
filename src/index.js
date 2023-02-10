import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './img/React-icon.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={reactLogo} width='100px' alt='React-logo'/>
      </nav>
    </header> 
  )
};

function MainContent() {
  return(
    <div>
      <h1>Reasons im excited to learn React</h1>
      <ol>
        <li>react1</li>
        <li>react2</li>
        <li>react3</li>
        <li>react4</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2023 blkbr development. All rights reserved.</small>
    </footer>
  )
};

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);