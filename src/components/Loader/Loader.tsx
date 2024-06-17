import ClipLoader from 'react-spinners/ClipLoader';
import Box from '@mui/material/Box';

const loaderStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '40%',
  left: '47%',
};

const Loader = () => {
  return (
    <><Box
      sx={
        loaderStyles
      }
    >
      <ClipLoader
        size={100}
      />
    </Box>
    </>
  );
};

export default Loader;
