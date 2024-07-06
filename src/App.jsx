import './App.css'
import { useState, useRef } from 'react';
import Hero from "./components/Hero";
import Bento from "./components/Bento";
import SplashAnimation from './components/SplashAnimation'
import StickyVideo from './components/StickyVideo';

function App() {
  const [isSplashAnimationState, isSplashAnimationSetState] = useState(false);

  setTimeout(() => {
    isSplashAnimationSetState(false);
  }, 1000)

  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // // const [volume, setVolume] = useState(1);

  // const handlePlayPause = () => {
  //   if (isPlaying) {
  //     videoRef.current.pause();
  //   } else {
  //     videoRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };


  return (
    <main>
      { isSplashAnimationState ? (
        <SplashAnimation />
      ) : (
        ''
      )}

      <Hero />
      <Bento />
      <StickyVideo />
    </main>

    
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
