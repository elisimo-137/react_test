import { useEffect } from "react";
import { useState } from "react";

export function Counter() {
  // state
  const [kliki, setKliki] = useState(0);

  useEffect(() => {
    if (kliki === 1000) {
      //alert("STOP DONT TALK TO ME");
    }
  }, [kliki]);

  return (
    <button
      className="border p-3 font-bold"
      onClick={() => {
        setKliki(kliki + 1);
      }}
    >
      Kliknil si me {kliki}-krat
      {kliki > 26 && <div className="text-orange-500">PLZ STAWPP</div>}
      {kliki % 2 === 0 ? <div>sodo</div> : <div>liho</div>}
    </button>
  );
}
