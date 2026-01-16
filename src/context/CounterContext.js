import React, { createContext, useContext, useState } from "react";

const AnimatedCounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <AnimatedCounterContext.Provider value={{ visible, setVisible }}>
      {children}
    </AnimatedCounterContext.Provider>
  );
};

export const useAnimatedCounter = () => useContext(AnimatedCounterContext);