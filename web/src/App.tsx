import { useEffect, useState } from 'react';
import { Stack } from '@mantine/core';
import LoadingLogo from './components/LoadingLogo';
import LoadingInfo from './components/LodaingInfo';
import LoadingProgress from './components/LoadingProgress';

import bg_image1 from '../../static/assets/bg_image1.png';
import bg_image2 from '../../static/assets/bg_image2.png';
import bg_image3 from '../../static/assets/bg_image3.png';
import bg_image4 from '../../static/assets/bg_image4.png';
import bg_image5 from '../../static/assets/bg_image5.png';
import bg_image6 from '../../static/assets/bg_image6.png';

function App() {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages: string[] = [bg_image1, bg_image2, bg_image3, bg_image4, bg_image5, bg_image6];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % bgImages.length);
    }, 7000);

    return () => clearInterval(bgInterval);
  }, [bgImages.length]);

  return (
    <>
      <Stack justify="space-between" h="100vh" style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgImages[currentBg]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 1s ease-in-out',
            animation: 'zoom-out 20s infinite',
            zIndex: -1,
          }}
        />

        <LoadingInfo />
        <LoadingLogo />
        <LoadingProgress />

        <style>
          {`
          @keyframes zoom-out {
            0% {
              transform: scale(1.3); /* Start slightly zoomed in */
            }
            100% {
              transform: scale(1); /* End at normal scale */
            }
          }
        `}
        </style>
      </Stack>
    </>
  );
}

export default App;
