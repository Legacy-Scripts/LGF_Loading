import { useEffect, useState } from 'react';
import { Stack } from '@mantine/core';
import { createStyles } from '@mantine/emotion';
import Config from '@common/config';
import LoadingLogo from './components/LoadingLogo';
import LoadingInfo from './components/LodaingInfo';
import LoadingProgress from './components/LoadingProgress';

const bgImages = Config.BackgroundImages.map((image: string) => require(`@assets/${image}`));

const useStyles = createStyles((_, { currentBg }: { currentBg: number }) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
  },

  bgimage: {
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
  },

  '@keyframes zoom-out': {
    '0%': {
      transform: 'scale(1.3)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

function App() {
  const [currentBg, setCurrentBg] = useState(0);
  const { classes } = useStyles({ currentBg });

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % bgImages.length);
    }, 7000);

    return () => clearInterval(bgInterval);
  }, []);

  return (
    <Stack className={classes.wrapper}>
      <div className={classes.bgimage} />
      <LoadingInfo />
      <LoadingLogo />
      <LoadingProgress />
    </Stack>
  );
}

export default App;
