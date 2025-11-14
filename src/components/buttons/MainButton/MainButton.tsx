import React from 'react';
import './MainButton.css';

interface MainButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  children = 'Click Me',
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default MainButton;
