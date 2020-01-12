import React, { useState } from "react";

let App: React.FC = () => {
  let a = useState("test");
  return <div>Hello, {a}</div>;
};

export default App;
