import { useState } from 'react';

const Input = ({ newColor }) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    newColor(color);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="color-form"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        className="text-form"
        placeholder="#15616d"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        style={{ background: `${color}` }}
        className="submit-form"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Input;
