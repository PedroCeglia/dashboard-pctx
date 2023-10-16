import React from 'react';
import { LoadingStyle } from './style';

const Loading = ({isLoading}) => {
  console.log("Loading: " + isLoading.toString())
  return (
    <LoadingStyle isLoading={isLoading}>
      <div></div>
    </LoadingStyle>
  );
};

export default Loading;