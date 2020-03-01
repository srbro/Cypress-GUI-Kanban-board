import { useEffect } from 'react';

function useClickAway(ref: any, callback: () => any, stop: boolean) {
  useEffect(() => {
    const handleClickAway = (event: any): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    if (stop) return;

    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [callback, ref, stop]);
}

export default useClickAway;
