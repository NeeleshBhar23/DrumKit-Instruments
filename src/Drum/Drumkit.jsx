import React, { useState } from 'react';
import './Drumkit.css'; // Import your CSS file
import crash from './sounds/crash.mp3';
import kickBass from './sounds/kick-bass.mp3';
import snare from './sounds/snare.mp3';
import tom1 from './sounds/tom-1.mp3';
import tom2 from './sounds/tom-2.mp3';
import tom3 from './sounds/tom-3.mp3';
import tom4 from './sounds/tom-4.mp3';

const DrumKit = () => {
  const [pressedKey, setPressedKey] = useState('');

  const makeSound = (key) => {
    let audio;
    switch (key) {
      case 'f':
        audio = new Audio(crash);
        break;
      case 'a':
        audio = new Audio(kickBass);
        break;
      case 's':
        audio = new Audio(snare);
        break;
      case 'd':
        audio = new Audio(tom1);
        break;
      case 'j':
        audio = new Audio(tom2);
        break;
      case 'k':
        audio = new Audio(tom3);
        break;
      case 'l':
        audio = new Audio(tom4);
        break;
      default:
        return;
    }
    audio.play();
  };

  const buttonAnimation = (key) => {
    setPressedKey(key);
    setTimeout(() => setPressedKey(''), 100);
  };

  const handleButtonClick = (key) => {
    makeSound(key);
    buttonAnimation(key);
  };

  const handleKeyPress = (event) => {
    const key = event.key.toLowerCase();
    if ('fasjdkl'.includes(key)) {
      makeSound(key);
      buttonAnimation(key);
    }
  };

  // Add event listener for key presses
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1 id="title">Drum 🥁 Kit</h1>
      <div className="set">
        <button className={`f drum ${pressedKey === 'f' ? 'pressed' : ''}`} onClick={() => handleButtonClick('f')}>
          f
        </button>
        <button className={`a drum ${pressedKey === 'a' ? 'pressed' : ''}`} onClick={() => handleButtonClick('a')}>
          a
        </button>
        <button className={`s drum ${pressedKey === 's' ? 'pressed' : ''}`} onClick={() => handleButtonClick('s')}>
          s
        </button>
        <button className={`d drum ${pressedKey === 'd' ? 'pressed' : ''}`} onClick={() => handleButtonClick('d')}>
          d
        </button>
        <button className={`j drum ${pressedKey === 'j' ? 'pressed' : ''}`} onClick={() => handleButtonClick('j')}>
          j
        </button>
        <button className={`k drum ${pressedKey === 'k' ? 'pressed' : ''}`} onClick={() => handleButtonClick('k')}>
          k
        </button>
        <button className={`l drum ${pressedKey === 'l' ? 'pressed' : ''}`} onClick={() => handleButtonClick('l')}>
          l
        </button>
        <h2>Play Drum For Fun</h2>
      </div>
      <footer>
         <p>Create with ❤️ By Neelesh</p>
      </footer>
    </div>
  );
};

export default DrumKit;
