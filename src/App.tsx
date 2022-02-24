/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import VideoCard from 'components/main';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const _handleClick = () => {
    setOpen(true);
  };

  const _handleClose = () => {
    setOpen(false);
  };
  return <VideoCard />;
}
export default App;
