import React, { useCallback } from "react";

function Capital({ text, setText }) {
  const inputHanlder = useCallback(e => setText(e.target.value), []);

  return (
    <div>
      <input value={text} onChange={inputHanlder} />
      <div>In caps: {text.toUpperCase()}</div>
    </div>
  );
}

export default Capital;