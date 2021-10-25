import { useEffect, useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  useEffect(() => {
    setMode(history[history.length - 1]);
  }, [history]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory((prev) => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
  };
  const back = () => {
    if (mode === initial) return;
    setHistory((prev) => [...prev].slice(0, -1));
  };
  return { mode, transition, back };
}

export default useVisualMode;
