import { Image } from '@mantine/core';
import logo from '../../../static/assets/logo.png';

function LoadingLogo() {
  return (
    <Image
      src={logo}
      style={{
        width: '150px',
        height: 'auto',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default LoadingLogo;
