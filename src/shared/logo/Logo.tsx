import React from 'react';
import logoIcon from './LogoIcon.svg';
import './Logo.css';

export default function Logo() {
  return <img className="logo" src={logoIcon} alt="Logo" />;
}
