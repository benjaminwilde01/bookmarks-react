import React, { useState } from "react";
import Form from "./components/Form";
import Show from "./components/Show";

function App() {

  const [currentId, setCurrentId] = useState(null)

  return (
    <div>
      <h1>Welcome to Bookmarks</h1>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Show setCurrentId={setCurrentId}/>
    </div>
  );
}

export default App;
