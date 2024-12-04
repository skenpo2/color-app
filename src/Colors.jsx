import React from 'react';
import Color from './Color';
import { nanoid } from 'nanoid';

const Colors = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <Color key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default Colors;
