import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

function Main() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Mindful Moments</h1>
      <p>Dive into Maham's Thoughts</p>
      
    </div>
  );
}

export default Main;
