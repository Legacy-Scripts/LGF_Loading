import { Image } from '@mantine/core';
import { createStyles } from '@mantine/emotion';

import logo from '@assets/logo.png';

const useStyles = createStyles(() => ({
  image: {
    width: '150px',
    height: 'auto',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));


function LoadingLogo() {
  const { classes } = useStyles();

  return (
    <Image src={logo} className={classes.image}/>
  );
}

export default LoadingLogo;
