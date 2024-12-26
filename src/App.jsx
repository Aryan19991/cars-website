import React from "react";
import './App.css';
import image1 from './assets/image1.webp';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.webp';
import image6 from './assets/image6.webp';
import image7 from './assets/image7.webp';
import image8 from './assets/image8.jpg';
import logo from './assets/logo.png';

function App() {
  const handleLogin = () => {
    console.log("Login clicked");
    // Handle login logic here
  };

  const handleSignUp = () => {
    console.log("Sign Up clicked");
    // Handle sign-up logic here
  };
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">The Auto Addict</h1>  

        <div className="auth-buttons">
          <button className="auth-button" onClick={handleLogin} >Login</button>
          <button className="auth-button" onClick={handleSignUp} >Sign Up</button>
        </div>
       </header>

      <div className="image-grid">
        <div className="image-container">
          <a href="https://finder.porsche.com/gb/en-GB/search/718?model=718&category=718-cayman-gt4" target="_blank" className="image-link">
            <p className="image-name">Porsche 718 Cayman GT4</p>
            <img src={image1} alt="Image 1" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.nissanusa.com/shopping-tools/build-price" target="_blank" className="image-link">
            <p className="image-name">Nissan GT-R</p>
            <img src={image2} alt="Image 2" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.porsche.com/international/models/718/" target="_blank" className="image-link">
            <p className="image-name">Porsche 911</p>
            <img src={image3} alt="Image 3" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.porsche.com/international/models/718/" target="_blank" className="image-link">
            <p className="image-name">Porsche Panamera</p>
            <img src={image4} alt="Image 4" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.porsche.com/international/models/718/" target="_blank" className="image-link">
            <p className="image-name">Porsche Taycan</p>
            <img src={image5} alt="Image 5" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.ebay.co.uk/b/bn_55184467" target="_blank" className="image-link">
            <p className="image-name">Mazda RX-7</p>
            <img src={image6} alt="Image 6" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.autotrader.co.uk/car-details/202412026932448" target="_blank" className="image-link">
            <p className="image-name">Mercedes-Benz G-Class</p>
            <img src={image7} alt="Image 7" />
          </a>
        </div>

        <div className="image-container">
          <a href="https://www.jamesedition.com/cars/aston_martin/valkyrie" target="_blank" className="image-link">
            <p className="image-name">Aston Martin Valkyrie</p>
            <img src={image8} alt="Image 8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
