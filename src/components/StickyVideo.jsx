import { useRef, useEffect, useState } from 'react';
import LazyVideo from './LazyVideo'; // Import the LazyVideo component
import volcanoVid from './13302178-sd_640_360_30fps.mp4'
import './video.css';

const StickyVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const video = videoRef.current;
      const rect = container.getBoundingClientRect();
      const totalScrollHeight = container.offsetHeight - window.innerHeight;

      console.log(rect);
      console.log(window.innerHeight);
      // Check if the video should be sticky
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        setIsSticky(true);
      } else {
        // setIsSticky(false);
      }

      // Control video playback based on scroll position
      const scrollPosition = window.scrollY - container.offsetTop;
      const progress = Math.min(Math.max(scrollPosition / totalScrollHeight, 0), 1);
      video.currentTime = progress * video.duration;
    };

    // Debounce scroll handler
    let timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '400vh' }}>
      <div className={`sticky-video ${isSticky ? 'sticky top-0' : ''} video-container`}>
        {/* <div className='video-container'> */}
          <video muted autoPlay playsInline loop className='fullscreen-video'>
            <source src={volcanoVid} type="video/mp4"/>
          </video>
        {/* </div> */}

        {/* <LazyVideo
          ref={videoRef}
          src={volcanoVid}
          className="w-full"
        /> */}
      </div>
    </div>
  );
};

export default StickyVideo;