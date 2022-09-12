import React from 'react';
import { useEffect } from 'react';

function Alert({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return <div className={`alert-${type}`}>{msg}</div>;
}

export default Alert;
