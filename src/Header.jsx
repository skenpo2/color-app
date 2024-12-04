import React from 'react';
import Input from './Input';

const Header = ({ newColor }) => {
  return (
    <header>
      <h1>Color Generator</h1>
      <p> Made with ❤️ from the city of Ibadan NG.</p>
      <Input newColor={newColor} />
    </header>
  );
};

export default Header;
