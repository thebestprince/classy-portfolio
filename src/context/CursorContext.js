import React, { useState, useEffect, createContext } from 'react';
// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  // cursor postion state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y:0,
  });

  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    }
    window.addEventListener('mousemove', move)
    // remove event
    return () => {
      window.removeEventListener('mousemove', move)
    };
      
});

//
const cursorVariants = {
  default: {
    x: cursorPos.x -16,
    y: cursorPos.y - 16,
    backgroundColor: '#0e1112',
  },
};
  return (
  <CursorContext.Provider value={{cursorVariants}}>
    {children}
  </CursorContext.Provider>
  );
};

export default CursorProvider;
//export default CursorContext;
