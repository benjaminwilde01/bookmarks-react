import React, { useState } from "react";
import Form from "./components/Form";

function App() {

  const [bookmarks, setBookmarks] = useState([])

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
