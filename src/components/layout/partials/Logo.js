import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = ({ className, ...props }) => {
  const classes = classNames('brand', className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <svg width="120" height="120" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="145" fill="#1a1a1a" />
            <circle cx="150" cy="150" r="140" fill="#000000" stroke="#00ff00" strokeWidth="6" />
            <path d="M90 130 Q150 90 210 130 Q150 170 90 130 Z" fill="#ffffff" />
            <rect x="115" y="120" width="25" height="12" rx="6" fill="#000000" />
            <rect x="160" y="120" width="25" height="12" rx="6" fill="#000000" />
            <text x="150" y="180" fontFamily="Courier, monospace" fontSize="20" fill="#00ff00" textAnchor="middle">
              <tspan x="150" dy="0">01010101</tspan>
              <tspan x="150" dy="24">10101010</tspan>
            </text>
            <text x="150" y="240" fontFamily="Arial Black, sans-serif" fontSize="24" fill="#ffffff" textAnchor="middle" fontWeight="bold">
              <tspan x="150" dy="0">BINARY</tspan>
              <tspan x="150" dy="28">BANDITS</tspan>
            </text>
          </svg>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;