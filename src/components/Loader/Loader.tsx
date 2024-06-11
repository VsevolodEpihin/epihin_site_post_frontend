import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Box from '@mui/material/Box';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>

      <Box
        sx={
          {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '20%',
            left: '47%',
          }
        }
      >
        <ClipLoader
          loading={isLoading}
          size={100}
        />
      </Box>
    </>
  );
};

export default Loader;
