import { useState, useEffect } from 'react';

export const Window = () => {
  const [window, setWindow] = useState<Window | null>(null);

  useEffect(() => {
    setWindow(globalThis.window ?? null);
  }, []);

  return window;
};




  