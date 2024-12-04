import { useState } from 'react';
import Values from 'values.js';
import Header from './Header';
import Colors from './Colors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [colors, setColors] = useState(new Values('#123409').all(5));

  const newColor = (color) => {
    try {
      const userColor = new Values(color).all(5);
      setColors(userColor);
    } catch (error) {
      toast.error('Input a valid Hex value');
    }
  };

  return (
    <main>
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={2000}
        hideProgressBar={true}
      />
      <Header newColor={newColor} />
      <Colors colors={colors} />
    </main>
  );
};

export default App;
