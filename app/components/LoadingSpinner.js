import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingSpinner = () => {
  return(
    <CircularProgress
      style={{
        display: 'block',
        margin: '45vh auto'
      }}
    />
  )    
} 

export default LoadingSpinner;