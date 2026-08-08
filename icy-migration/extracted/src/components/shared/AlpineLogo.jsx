import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = '/images/3464343bc_alpine_meadows_logo_clean.svg';

export default function AlpineLogo({ variant = 'dark', height = 48, linkTo = '/' }) {
  const img = (
    <img
      src={LOGO_URL}
      alt="Alpine Meadows Landscaping Construction Corp"
      style={{ height, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
    />
  );

  if (linkTo) {
    return <Link to={linkTo} className="flex items-center">{img}</Link>;
  }
  return img;
}