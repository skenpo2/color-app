import React from 'react';
import { toast } from 'react-toastify';

const Color = ({ color, index }) => {
  const { weight, hex } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard)
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy color to clipboard');
      }
    else {
      toast.error('No clipboard access');
    }
  };
  return (
    <article
      className={
        index > 10 ? 'white-text color-container' : 'dark-text color-container'
      }
      onClick={saveToClipboard}
      style={{ background: `#${hex}` }}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
};

export default Color;
